'use strict';
var config = require('../../server/config.json');
var path = require('path');
//{"email":"dennismolina.17@gmail.com","password":"123"}
module.exports = function(Account) {

	//send verification email after registration
  Account.afterRemote('create', function(context, userInstance, next) {
    console.log('> Account.afterRemote triggered');

    var options = {
      type: 'email',
      to: userInstance.email,
      from: 'noreply@loopback.com',
      subject: 'Thanks for registering.',
      template: path.resolve("/", '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: Account
    };

    userInstance.verify(options, function(err, response, next) {
      if (err) return next(err);

      console.log('> verification email sent:', response);

      context.res.render('response', {
        title: 'Signed up successfully',
        content: 'Please check your email and click on the verification link ' -
            'before logging in.',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });
    });
  });

};
