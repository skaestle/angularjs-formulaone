'use strict';

angular.module('formulaOneApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/drivers', {
        templateUrl: 'views/drivers.html', 
        controller: 'DriversCtrl'
      })
      .when('/drivers/:id', {
        templateUrl: 'views/driver.html', 
        controller: 'DriverCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });