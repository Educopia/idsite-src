'use strict';

(function(){

  angular
  .module('stormpathIdpApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl'
      })
      .when('/forgot/:retry?', {
        templateUrl: 'views/forgot.html',
        controller: 'ForgotCtrl'
      })
      .when('/reset', {
        templateUrl: 'views/reset.html',
        controller: 'ResetCtrl'
      })
      .when('/verify', {
        templateUrl: 'views/verify.html',
        controller: 'VerifyCtrl'
      })
      .when('/unverified', {
        templateUrl: 'views/unverified.html',
        controller: 'UnverifiedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant("restart_uri", "https://resa-app.educopia.com/app/")
 //  .run(function(Stormpath){
 //     Stormpath.init.then(function(){
 //      console.log('cb_uri',Stormpath.client.jwtPayload.cb_uri);
 //    })
 // });
 .run(function(Stormpath){
    Stormpath.init.then(function(){
      //console.log('cb_uri',Stormpath.client.jwtPayload.cb_uri);
    }).catch(function(err){
      //console.log('init error',err);
      //console.log('cb_uri',Stormpath.client.jwtPayload.cb_uri);
    });
  });
})(window);