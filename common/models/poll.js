'use strict';
var config = require('../../server/config.json');
var path = require('path');
var loopback = require("loopback");
var InferenceEngine = require('../../InferenceEngine/coreEngine');

module.exports = function(Poll) {
	Poll.sendEmails = function(id, cb){
		var experts = Poll.find({
			include: 'experts',
			where:{
				id: id
			}
		},(err, results)=>{
			if(err) return cb(err);
			results[0].investigation(function(err, investigation) {
			    investigation.experts(function(err, experts) {
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
		Poll.find({
			include: 'experts',
			where:{
				id: pollId
			}
		},(err, experts)=>{
			if(err) return cb(err);

		    var expertList = experts[0].experts();

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
	}


	Poll.getConcordance = function(id, cb){

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
          	returns: { arg: 'data', type: 'Object'}
    	}
    );
};
