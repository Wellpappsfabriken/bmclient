'use strict';

/**
 * @ngdoc service
 * @name bmclientApp.userSession
 * @description
 * # userSession
 * Service in the bmclientApp.
 */
var userSession = angular.module('userService',[]);

userSession.factory('userSession', function () {
    var user;

    return {
      setUser : function (username) {
        user = username;
      },
      printUser : function () {
        console.log(user);
      },
      getUser : function () {
        return user;
      }};
  });
