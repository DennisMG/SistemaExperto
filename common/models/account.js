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
      template: path.resolve(__dirname,'../../server/views/verify.ejs'), ///Cambiar el primer parametro de resolve por tu path
      redirect: '/verified',
      verifyHref: 'http://localhost:3000/api/Accounts/confirm?uid='+userInstance.id+'&redirect=http://localhost:8888',
      user: Account,
      text: '{href}'


    };



    userInstance.verify(options, function(err, response) {
    	console.log( err );
    	console.log( response );
    	console.log( next );
      
      if (err) {
        Account.deleteById(userInstance.id);
        return next(err);
      }

      console.log('> verification email sent:', response);

      return {name:"Manuel", apellido:"salguero"};
      ////////Esta parte es la que crashea!////////////////
      // context.res.render('response', {
      //   title: 'Signed up successfully',
      //   content: 'Please check your email and click on the verification link ' -
      //       'before logging in.',
      //   redirectTo: '/',
      //   redirectToLinkText: 'Log in'
      // });
    });
  });

};
