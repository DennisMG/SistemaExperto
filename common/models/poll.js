'use strict';
var config = require('../../server/config.json');
var path = require('path');
var loopback = require("loopback");
var InferenceEngine = require('../../InferenceEngine/coreEngine');
var kappaFleiss = require('../../InferenceEngine/FleissKappa');

module.exports = function(Poll) {
	var app = require('../../server/server');

	Poll.sendEmails = function(id, cb){
		var experts = Poll.find({
			include: 'experts',
			where:{
				id: id
			}
		},(err, results)=>{
			if(err) return cb(err);
			console.log("RESULTS",results[0]);
			results[0].investigation(function(err, investigation) {
			    investigation.experts(function(err, experts) {
			    	console.log("EXPERTS: ",experts);
			    	experts.forEach((expert,index)=>{
				    	var emailData = {
					      url_poll:"https://rubricexpert.herokuapp.com/fill-poll/"+id+"/expert/"+expert.id
					    }; 
					    var renderer = loopback.template(path.resolve(__dirname, '../../server/views/pollInvitation.ejs'));
					    var html_body = renderer(emailData);
				    	var options = {
					      to: expert.email,
					      from: 'noreply@rubricexpert.com',
					      subject: 'Poll from Rubric Expert.',
					      html: html_body,
					    };
				    	Poll.app.models.Email.send(options, function(err, mail) {
							if(err) return cb(err);
						});
				    });
				    cb(null,experts);
				});
			});
		});
	}

	Poll.getSuggestions = function(pollId, cb){
		try{
			Poll.find({
			include: 'experts',
			where:{
				id: pollId
			}
		},(err, experts)=>{
			if(err) return cb(err);

		    var expertList = experts[0].experts();
		    if(expertList.length === 0){
		    	var error = new Error("There are no experts assigned to this poll");
				error.status = 404;
				return cb(error);
		    }
		    var findExpertById = function(id, expertList){
		    	var found = '';
		    	for(var i = 0 ; i < expertList.length; i++){
		    		if(id.equals(expertList[i].id)){
		    			found = expertList[i];
		    			break;
		    		}

		    	}
		    	if(found)
		    		return found;
		    }

		    Poll.find({
				include: ['results'],
				where:{
					id: pollId
				}
			},(err, results)=>{
				if(err) return cb(err);
			    var results = results[0].results();
			    if(results.length === 0){
			    	var error = new Error("There are 0 results for this poll");
					error.status = 404;
					return cb(error);
			    }
			    var observations = [];
				for (var i = 0; i < results.length; i++) {
					if(results[i].answers){
						var observation = [results[i].expertId];
						// console.log("observation: ", results[i].answers[i].String);
						observation = (observation.concat(results[i].answers.map((obs)=>obs.value)));
						observations.push(observation);
					}
				};
			     // console.log(observations);
			     if(results.length == 0)
			     	return cb(null,{});
			     console.log("observations: ",observations);
			     var engine = new InferenceEngine({
						file_name: 'test',
						data: observations,
						k: 2,
						m: 0,
						shuffle: false,
						times: 100
					});
			    var kendallsW= engine.calculateKendallsW();
				var kMeans = engine.runKMeans();
				var biggestCluster = engine.getMainCluster();
				var vectors = engine.getVectors();

				// console.log( "vectors: ",vectors );
				var finalExperts = [];

				for(var i=0; i<vectors.length;i++){
					if(biggestCluster == kMeans[i]){
						finalExperts.push(vectors[i].expert);
					}
				}

				var agreedExperts = [];
				for(var i=0; i<finalExperts.length;i++){
					var found = findExpertById(finalExperts[i], expertList);
					if(found)
						agreedExperts.push(found);
				}

				// console.log( agreedExperts );

				var response = {
					kendallsW: kendallsW,
					suggestion: agreedExperts
				};
			    cb(null,response)
			});
		});
		}catch(e){

		}
	}

	function fillArray(arr){
		for (var i = arr.length - 1; i >= 0; i--) {
			for (var x = arr[i].length - 1; x >= 0; x--) {
				arr[i][x] = 0;
			};
		};
	}


	function createArray(length) {
	    var arr = new Array(length || 0),
	        i = length;

	    if (arguments.length > 1) {
	        var args = Array.prototype.slice.call(arguments, 1);
	        while(i--) arr[length-1 - i] = createArray.apply(this, args);
	    }

	    return arr;
	}

	var extractDimensionCount = function(variableArray){
		var totalDimensions = 0;
		for (var i = 0; i < variableArray.length; i++) {
			totalDimensions += variableArray[i].length; 
		};
		return totalDimensions;
	}

	var addImportant = function(isImportant, rowId, matrix){
		if(isImportant)
			matrix[rowId][0]++;
		else
			matrix[rowId][1]++;
	}

	var addResultsToMatrix = function(pollAnswers, matrix){
		var currentDimension = 0;
		pollAnswers.map((variableAnswers, idx)=>{
			variableAnswers.map((dimension, idx)=>{
				addImportant(dimension.important, currentDimension, matrix);
				currentDimension++;
			});
		});
	}

	var countResults = function(results){
		var dimensionCount = extractDimensionCount(results[0].answers);
		var optionsCount = 2;
		var finalResults = createArray(dimensionCount, optionsCount);
		fillArray(finalResults);
		var experts = results;
		for (var i = 0; i < results.length; i++) {
			addResultsToMatrix(experts[i].answers, finalResults);
		};

		//5856434062fdbe1100777ebe
		return finalResults;

	}


	Poll.getConcordance = function(id, cb){
		Poll.find({
			include: ['results'],
			where:{ id: id }
		},(err, poll)=>{
			if(err) return cb(err);
			var results=poll[0].results();
			if(poll[0].type !== '2'){
				var error = new Error("This Poll does not support concordance calculation. Should be type 2");
				error.status = 422;
				return cb(error);
			}

			var arrayResults = countResults(results);
			cb(null,kappaFleiss(arrayResults))
	})}

	Poll.sendEmailsToExperts = function(pollId, expertList, cb){
		// console.log("pollID:", pollId);
		// console.log("expertList: ", expertList);
		var experts = Poll.find({
			include: 'experts',
			where:{
				id: pollId
			}
		},(err, results)=>{
			if(err) return cb(err);
			console.log("RESULTS",results[0]);
			results[0].investigation(function(err, investigation) {
			    investigation.experts(function(err, experts) {
			    	console.log("EXPERTS: ",experts);

			    	experts.forEach((expert,index)=>{
			    		if(expertList.indexOf(expert.id) < 0){
			    			return;
			    		}
				    	var emailData = {
					      url_poll:"https://rubricexpert.herokuapp.com/fill-poll/"+id+"/expert/"+expert.id
					    }; 
					    var renderer = loopback.template(path.resolve(__dirname, '../../server/views/pollInvitation.ejs'));
					    var html_body = renderer(emailData);
				    	var options = {
					      to: expert.email,
					      from: 'noreply@rubricexpert.com',
					      subject: 'Poll from Rubric Expert.',
					      html: html_body,
					    };
				    	Poll.app.models.Email.send(options, function(err, mail) {
							if(err) return cb(err);
						});
				    });
				    cb(null,experts);
				});
			});
		});
	}



	Poll.remoteMethod(
        'sendEmails',
        {
        	http: { path: '/:id/sendEmails', verb: 'get'},
        	accepts: {arg: 'id', type: 'string'},
        	returns: {arg: 'data', type: 'array'}
        }
    );

    Poll.remoteMethod(
        'sendEmailsToExperts',
        {
        	http: { path: '/:pollId/sendEmailsToExperts', verb: 'post'},
        	accepts: [{arg: 'pollId', type: 'string'},{arg: 'expertList', type: 'array', http: { source: 'body' }}],
        	returns: {arg: 'data', type: 'array'}
        }
    );

    Poll.remoteMethod(
        'getSuggestions',
        {
        	http: { path: '/:id/getSuggestions', verb: 'get'},
        	accepts: { arg: 'id', type: 'string'},
        	returns: { arg: 'data', type: 'Object'}
        }
    );

    Poll.remoteMethod(
    	'getConcordance',
    	{
    		http: { path: '/:id/getConcordance', verb: 'get'},
         	accepts: { arg: 'id', type: 'string'},
          	returns: { arg: 'kappa', type: 'Object'}
    	}
    );
};
