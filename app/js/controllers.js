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
			{
				'name': 'red', 'intensity':0, 'options': {
					from: 0,
					to: 255,
					step: 1,
					css: {
						background: {"background-color": "silver"},
						after: {"background-color":"red"},
						pointer: {"background-color": "gray"}          
					}
				}
			},
			{
				'name':'green', 'intensity':0, 'options': {
					from: 0,
					to: 255,
					step: 1,
					css: {
						background: {"background-color": "silver"},
						after: {"background-color":"green"},
						pointer: {"background-color": "gray"}          
					}
				}			
			},
			{
				'name':'blue', 'intensity':0, 'options': {
					from: 0,
					to: 255,
					step: 1,
					css: {
						background: {"background-color": "silver"},
						after: {"background-color":"blue"},
						pointer: {"background-color": "gray"}          
					}
				}
			}
		];
		$scope.$watch('colors',function() {
			$socket.emit('json',$scope.colors);			
		}, true);

	}
]);