'use strict';

/* Services */

var jockeyServices = angular.module('jockeyServices', ['ngResource']);

jockeyServices.factory('socket',
  function(socketFactory){
    return socketFactory({
    	ioSocket: io.connect('http://192.168.1.2/slider/')
    	});
  }
 );

