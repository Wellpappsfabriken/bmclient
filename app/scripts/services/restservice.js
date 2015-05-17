'use strict';

/**
 * @ngdoc service
 * @name bmclientApp.restService
 * @description
 * # restService
 * Service in the bmclientApp.
 */
var restService = angular.module('rest',['ngResource']);

restService.factory('Mate', ['$resource',
  function ($resource) {
    return $resource('http://localhost:8080/root/rest/mateService/mate/:mateID',{}, {
      get: {method:'GET', params: {mateID:'0'}}
    });
  }]);
