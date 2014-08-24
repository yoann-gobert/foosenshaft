'use strict';

describe('Directive: timerCircle', function () {

    // load the directive's module and view
    beforeEach(module('foosenshaftApp'));
    beforeEach(module('app/timerCircle/timerCircle.html'));

    var element, scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<timer-circle></timer-circle>');
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.text()).toBe('this is the timerCircle directive');
    }));
});
