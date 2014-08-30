'use strict';

describe('Controller: NewMatchCtrl', function () {

  // load the controller's module
  beforeEach(module('foosenshaftApp'));

  var NewMatchCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewMatchCtrl = $controller('NewMatchCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
