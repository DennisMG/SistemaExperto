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
      from: 'noreply@sistemaexperto.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname,'../../server/views/verify.ejs'), 
      redirect: '/verified',
      verifyHref: 'http://localhost:3000/api/Accounts/confirm?uid='+userInstance.id+'&redirect=http://localhost:8888',
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
