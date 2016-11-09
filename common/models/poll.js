'use strict';
var config = require('../../server/config.json');
var path = require('path');
var loopback = require("loopback");

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

	Poll.remoteMethod (
        'sendEmails',
        {
          http: {path: '/:id/sendEmails', verb: 'get'},
          accepts: {arg: 'id', type: 'string'},
          returns: {arg: 'data', type: 'array'}
        }
    );
};
