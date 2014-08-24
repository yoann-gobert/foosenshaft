'use strict';

describe('Directive: goal', function () {

  // load the directive's module and view
  beforeEach(module('foosenshaftApp'));
  beforeEach(module('app/goal/goal.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<goal></goal>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the goal directive');
  }));
});