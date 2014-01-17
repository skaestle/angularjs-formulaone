'use strict';

angular.module('formulaOneApp')
  .service('ergast', function ergast($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    };

    return ergastAPI;
  });
