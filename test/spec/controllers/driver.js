'use strict';

describe('Controller: DriversCtrl', function () {

  // load the controller's module
  beforeEach(module('formulaOneApp'));

  var DriversCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DriversCtrl = $controller('DriversCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
