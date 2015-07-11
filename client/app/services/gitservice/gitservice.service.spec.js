'use strict';

describe('Service: gitservice', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var gitservice;
  beforeEach(inject(function (_gitservice_) {
    gitservice = _gitservice_;
  }));

  it('should do something', function () {
    expect(!!gitservice).toBe(true);
  });

});
