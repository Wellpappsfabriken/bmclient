'use strict';

/**
 * @ngdoc function
 * @name bmclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bmclientApp
 */
angular.module('bmclientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
