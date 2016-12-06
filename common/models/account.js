'use strict';
var config = require('../../server/config.json');
var path = require('path');
//{"email":"dennismolina.17@gmail.com","password":"123"}
// userId: 581ab7472f8b64772a6a6313
// Investigation id: 582b7e936ea22a520fd78484
// Poll id: 582b7f3c6ea22a520fd78485
// expert1 id: 582b80226ea22a520fd78486
// expert2 id: 582b80286ea22a520fd78488
// expert3 id: 582b802b6ea22a520fd7848a
// expert4 id: 582b802f6ea22a520fd7848c 
module.exports = function(Account) {

	//send verification email after registration
  Account.afterRemote('create', function(context, userInstance, next) {
    console.log('> Account.afterRemote triggered');

    var options = {
      type: 'email',
      to: userInstance.email,
      from: 'noreply@rubricexpert.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname,'../../server/views/verify.ejs'), 
      redirect: '/verified',
      verifyHref: 'https://rubric-expert.herokuapp.com/api/Accounts/confirm?uid='+userInstance.id+'&redirect=https://rubricexpert.herokuapp.com/login',
      user: Account,
      text: '{href}'
    };



    userInstance.verify(options, function(err, response) {
      if (err) {
        Account.deleteById(userInstance.id);
        return next(err);
      }

      console.log('> verification email sent:', response);

      context.result = {
        data: {name:"Manuel", apellido:"salguero"}
      };

      next();
    });
  });

};
