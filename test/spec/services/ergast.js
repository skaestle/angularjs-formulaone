'use strict';

describe('Service: Ergast', function () {

  // load the service's module
  beforeEach(module('formulaOneApp'));

  // instantiate service
  var Ergast;
  beforeEach(inject(function (_Ergast_) {
    Ergast = _Ergast_;
  }));

  it('should do something', function () {
    expect(!!Ergast).toBe(true);
  });

});
