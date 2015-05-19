'use strict';

/**
 * @ngdoc service
 * @name bmclientApp.restService
 * @description
 * # restService
 * Service in the bmclientApp.
 */
var restService = angular.module('rest',['ngResource']);

restService.factory('Mate', function ($resource) {
  return $resource('http://jbossews-bladdermate.rhcloud.com/rest/mateService/mate',{}, {
    create: {method:'POST'},
    get:{method: 'GET', url: 'http://jbossews-bladdermate.rhcloud.com/rest/mateService/mate/:mateID'}
  });
});

