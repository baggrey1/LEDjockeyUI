'use strict';

// Declare app level module which depends on views, and components
var jockeyApp = angular.module('jockeyApp', [
  'ngRoute',
  'jockeyControllers',
  'jockeyServices',
  'ngSlider',
  'ngSocket'
]);

jockeyApp.value('ledAPIURL', 'http://192.168.1.15:5000/');
jockeyApp.value('bedroomURL', 'http://192.168.1.2:5000/');

jockeyApp.config(['$routeProvider', '$socketProvider',
	function($routeProvider, $socketProvider) {
  		$routeProvider.
  		when('/control', {
  			templateUrl: 'partials/control.html',
  			controller: 'jockeyCtrl'
  		}).
  		otherwise({
  			redirectTo: '/control'
  		});

      $socketProvider.setUrl("http://192.168.1.2:5000/");
	}]);