'use strict';
var config = require('../../server/config.json');
var path = require('path');
var loopback = require("loopback");

module.exports = function(Poll) {
	Poll.sendEmails = function(pollId, cb){
		var experts = Poll.find({
			include: 'experts',
			where:{
				id: pollId
			}
		},(err, results)=>{
			if(err) return cb(err);


			var emailData = {
		      url_poll:"www.google.com",
		      test:''
		    }; 

		    var renderer = loopback.template(path.resolve(__dirname, '../../server/views/pollInvitation.ejs'));
		    var html_body = renderer(emailData);


		    var experts = results[0].experts();

		    experts.forEach((expert,index)=>{
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
		 
     			cb(null,results[0].experts())
		});
	}

	Poll.remoteMethod (
        'Polls/{id}/sendEmails',
        {
          http: {path: '/sendEmails', verb: 'get'},
          accepts: {arg: 'id', type: 'string'},
          returns: {arg: 'data', type: 'array'}
        }
    );
};
