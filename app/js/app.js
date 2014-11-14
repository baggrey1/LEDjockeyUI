'use strict';

// Declare app level module which depends on views, and components
var jockeyApp = angular.module('jockeyApp', [
  'ngRoute',
  'jockeyControllers',
  'jockeyServices',
]);

jockeyApp.value('ledAPIURL', 'http://192.168.1.12:5000/');

jockeyApp.config(['$routeProvider', 
	function($routeProvider) {
  		$routeProvider.
  		when('/control', {
  			templateUrl: 'partials/control.html',
  			controller: 'jockeyCtrl'
  		}).
  		otherwise({
  			redirectTo: '/control'
  		});
	}]);