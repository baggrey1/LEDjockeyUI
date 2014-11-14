'use strict';

/* Controllers */

var jockeyControllers = angular.module('jockeyControllers', []);

jockeyControllers.controller('jockeyCtrl', ['$scope','$http', 'ledAPIURL',
	function($scope, $http, ledAPIURL) {
		$scope.ledAPIURL = ledAPIURL,
		$scope.states = [
			{text:'LEDs on', button:'btn-primary', command:'on'},
			{text:'LEDs off', button:'btn-default', command:'off'}
		];

		$scope.profiles = [
			{color:'blue', button:'btn-primary'},
			{color:'aqua', button:'btn-info'},
			{color:'green', button:'btn-success'},
			{color:'yellow', button:'btn-warning'},
			{color:'red', button:'btn-danger'},
			{color:'fuschia', button:'btn-default'}
		];
		$scope.easy_command = {};
		$scope.easy_command.clicked = function(color) {
			$scope.query = $http({
				method: 'GET',
				url: ledAPIURL+'easy/',
				params: {command: color}
			});
		};

	}]);