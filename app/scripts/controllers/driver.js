'use strict';

// TODO: why does this work (ergast)
angular.module('formulaOneApp').controller('DriverCtrl', function ($scope, ergast) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.driversList = [];

  ergast.getDrivers().success(function (response) {
      //Dig into the responde to get the relevant data
      $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
});
