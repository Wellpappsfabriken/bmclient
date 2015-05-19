'use strict';

describe('Service: userSession', function () {

  // load the service's module
  beforeEach(module('bmclientApp'));

  // instantiate service
  var userSession;
  beforeEach(inject(function (_userSession_) {
    userSession = _userSession_;
  }));

  it('should do something', function () {
    expect(!!userSession).toBe(true);
  });

});
