'use strict';

describe('Service: magnumciservice', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var magnumciservice;
  beforeEach(inject(function (_magnumciservice_) {
    magnumciservice = _magnumciservice_;
  }));

  it('should do something', function () {
    expect(!!magnumciservice).toBe(true);
  });

});
