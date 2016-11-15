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
		    var experts = results[0].experts();
		    experts.forEach((expert,index)=>{
		    	var emailData = {
			      url_poll:"http://www.algo.com/fill-poll/"+id+"/expert/"+expert.id
			    }; 
			    var renderer = loopback.template(path.resolve(__dirname, '../../server/views/pollInvitation.ejs'));
			    var html_body = renderer(emailData);
		    	var options = {
			      type: 'email',
			      to: expert.email,
			      from: 'noreply@sistemaexperto.com',
			      subject: 'Encuesta desde Sistema Experto.',
			      html: html_body,
			    };
		    	Poll.app.models.Email.send(options, function(err, mail) {
					if(err) return cb(err);
				});
		    });
		    cb(null,experts)
		});
	}

	Poll.getSuggestions = function(pollId, cb){
		var data = [["JW",'HOla','Como','Estas','BEBE','hello'],
					["JX",'Como','HOla','Como','hello','BEBE'],
					["JY",'Como','HOla','hello','BEBE','Como'],
					["JZ",'HOla','Como','Como','BEBE','hello']]
		
		
		// var kendallsW= methods.calculateKendallsW();
		// var kMeans = methods.runKMeans();
		// var response = {
		// 	kendallsW: kendallsW,
		// 	kMeans: kMeans
		// };
		// cb(null,response);
		var experts = Poll.find({
			include: ['experts','results'],
			where:{
				id: pollId
			}
		},(err, results)=>{
			if(err) return cb(err);
		    console.log("results1: ",results);
		    var results = results[0].results();
		    var observations = [];
		    console.log("results2: ",results);
			for (var i = 0; i < results.length; i++) {
				if(results[i].answers){
					var observation = [results[i].expertId];
					observation = (observation.concat(results[i].answers));
					observations.push(observation);
				}
			};
		     console.log(observations);
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

			for(var i=0; i<0;i++){

			}

			var response = {
				kendallsW: kendallsW,
				kMeans: kMeans
			};
		    cb(null,response)
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
