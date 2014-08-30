'use strict';

describe('Controller: SidePanelCtrl', function () {

  // load the controller's module
  beforeEach(module('foosenshaftApp'));

  var SidePanelCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidePanelCtrl = $controller('SidePanelCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
