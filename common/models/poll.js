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
			console.log("results: ", results);
			results[0].investigation(function(err, investigation) {
				console.log(investigation);
			    investigation.experts(function(err, experts) {
			    	console.log("experts: ",experts);
			    	experts.forEach((expert,index)=>{
			    		console.log("send email to: ",expert);
				    	var emailData = {
					      url_poll:"http://localhost:8888/#/fill-poll/"+id+"/expert/"+expert.id
					    }; 
					    var renderer = loopback.template(path.resolve(__dirname, '../../server/views/pollInvitation.ejs'));
					    var html_body = renderer(emailData);
				    	var options = {
					      to: expert.email,
					      from: 'noreply@sistemaexperto.com',
					      subject: 'Encuesta desde Sistema Experto.',
					      html: "html <b>message</b>",
					    };
				    	Poll.app.models.Email.send(options, function(err, mail) {
				    		console.log("mail: ", mail);
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
		    console.log("expertList: ", expertList );

		    var findExpertById = function(id, expertList){
		    	var found = '';
		    	for(var i = 0 ; i < expertList.length; i++){
		    		// console.log( "find: "+ id+" == "+  expertList[i].id);
		    		// console.log( "RESULT: "+ expertList[i].id === id );
		    		if(id.equals(expertList[i].id)){
		    			// console.log("FOUND!: ", expertList[i] );
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
			    //console.log("results1: ",results);
			    var results = results[0].results();
			    
			    var observations = [];
				for (var i = 0; i < results.length; i++) {
					if(results[i].answers){
						var observation = [results[i].expertId];
						observation = (observation.concat(results[i].answers));
						observations.push(observation);
					}
				};
			     //console.log(observations);
			     if(results.length == 0)
			     	return cb(null,{});
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

				console.log( "vectors: ",vectors );
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

				console.log( agreedExperts );

				var response = {
					kendallsW: kendallsW,
					suggestion: agreedExperts
				};
			    cb(null,response)
			});


		});
		
		
		
		
	}

	Poll.remoteMethod (
        'sendEmails',
        {
          http: {path: '/:id/sendEmails', verb: 'get'},
          accepts: {arg: 'id', type: 'string'},
          returns: {arg: 'data', type: 'array'}
        }
    );

    Poll.remoteMethod (
        'getSuggestions',
        {
          http: {path: '/:id/getSuggestions', verb: 'get'},
          accepts: {arg: 'id', type: 'string'},
          returns: {arg: 'data', type: 'Object'}
        }
    );
};
