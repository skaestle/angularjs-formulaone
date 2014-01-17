'use strict';

// TODO: why does this work (ergast)
angular.module('formulaOneApp').controller('DriverCtrl', function ($scope, $routeParams, ergast) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.id = $routeParams.id;
  $scope.races = [];
  $scope.driver = null;

  ergast.getDriverDetails($scope.id).success(function (response) {
    $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
  });

  ergast.getDriverRaces($scope.id).success(function (response) {
    $scope.races = response.MRData.RaceTable.Races; 
  });
});
