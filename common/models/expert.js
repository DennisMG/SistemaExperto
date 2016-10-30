'use strict';
var config = require('../../server/config.json');
var path = require('path');
var loopback = require("loopback");

module.exports = function(Expert) {
		//send verification email after registration
  Expert.afterRemote('create', function(context, expertInstance, next) {
  	console.log(expertInstance);

  	 var myMessage = {heading:"Hi, ", text:"We are happy to have you on board."}; 

    // prepare a loopback template renderer
    var renderer = loopback.template(path.resolve(__dirname, '../../server/views/pollInvitation.ejs'));
    var html_body = renderer(myMessage);

    var options = {
      type: 'email',
      to: expertInstance.email,
      from: 'noreply@sistemaexperto.com',
      subject: 'Encuesta desde Sistema Experto.',
      hmtl: html_body
    };

    if(expertInstance.send_poll){
    	Expert.app.models.Email.send(options, function(err, mail) {
        console.log('Email Sent!');
        console.log(mail);
        next(err);
      });
    }
    




    
  });

};
