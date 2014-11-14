'use strict';

/* Services */

var jockeyServices = angular.module('jockeyServices', ['ngResource']);

jockeyServices.factory('command',['$resource', '$http',
  function($resource,$http){
    return $resource('easyCommand', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);