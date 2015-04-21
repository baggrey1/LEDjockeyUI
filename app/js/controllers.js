'use strict';

/* Controllers */

var jockeyControllers = angular.module('jockeyControllers', []);

jockeyControllers.controller('jockeyCtrl', ['$scope','$http', 'ledAPIURL', '$socket', 'bedroomURL',
	function($scope, $http, ledAPIURL, $socket, bedroomURL) {
		$scope.ledAPIURL = ledAPIURL;
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
		$scope.bedroom_command = function(state) {
			$http.get(bedroomURL+'state/', {
				params:{command: state}
			});
		};
		$scope.colors = [
			{'name': 'red', 'intensity':175},
			{'name':'green', 'intensity':150},
			{'name':'blue', 'intensity':140,}
		];
		
		$scope.$watch('colors',function() {
			$socket.emit('json',$scope.colors);			
		}, true);

		$scope.colorOptions = {
			orientation: 'horizontal',
			min: 0,
			max: 255,
			range: 'min'
		}

		$scope.colorpicker = {
			red: 255,
			green: 140,
			blue: 60,
			options: {
				orientation: 'horizontal',
				min: 0,
				max: 255,
				range: 'min',
			}
		};

	}
]);