'use strict';

/**
 * @ngdoc function
 * @name bmclientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bmclientApp
 */
angular.module('bmclientApp')
  .controller('MainCtrl', ['$scope','Mate', function ($scope, Mate) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Stuff'
    ];
    $scope.mate = Mate.get();
  }]);
