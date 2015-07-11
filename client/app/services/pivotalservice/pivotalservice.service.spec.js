'use strict';

describe('Service: pivotalservice', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var pivotalservice;
  beforeEach(inject(function (_pivotalservice_) {
    pivotalservice = _pivotalservice_;
  }));

  it('should do something', function () {
    expect(!!pivotalservice).toBe(true);
  });

});
