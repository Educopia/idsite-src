'use strict';

angular.module('stormpathIdpApp')
  .controller('ErrorCtrl', function ($scope,Stormpath) {
    
    var client = new Stormpath.Client()
    $scope.jwtPayload = client.jwtPayload
    $scope.errors = Stormpath.errors;
    $scope.inError = false;
    // todo: uncomment!!!!
    $scope.$watchCollection('errors',function(){
      $scope.inError = $scope.errors.length > 0;
    });

  //note: this is hardcoded, might need to remove this
  // $scope.logoUrl = "/images/logo.png"
  });
