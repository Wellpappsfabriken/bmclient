'use strict';

/**
 * @ngdoc function
 * @name bmclientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bmclientApp
 */
angular.module('bmclientApp')
  .controller('LoginCtrl', ['$scope','Mate','$window','userSession', function ($scope, Mate, $window, userSession) {

    $scope.setUser = function (username) {
      Mate.get({mateID: username},function(data) {
        if (!!data.mateID) {
          userSession.setUser(username);
          $window.location.href = '/#/home';
        }
      });
    };

    $scope.makeUser = function (username) {
      Mate.get({mateID: username},function(data) {
        console.log(data);
        if (!data.mateID) {
          Mate.create({mateID:username, record:[], currentNight: null});
          userSession.setUser(username);
          $window.location.href = '/#/home';
        }
      });
    };
  }]);
