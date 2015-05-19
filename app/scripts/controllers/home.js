'use strict';

angular.module('bmclientApp')
  .controller('HomeCtrl', ['$scope', 'userSession',function ($scope, userSession) {
    $scope.username = userSession.getUser();
  }]);
