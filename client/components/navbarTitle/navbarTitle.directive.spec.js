'use strict';

describe('Directive: navbarTitle', function () {

  // load the directive's module and view
  beforeEach(module('foosenshaftApp'));
  beforeEach(module('components/navbarTitle/navbarTitle.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navbar-title></navbar-title>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the navbarTitle directive');
  }));
});