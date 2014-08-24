'use strict';

describe('Filter: formatTime', function () {

    // load the filter's module
    beforeEach(module('foosenshaftApp'));
    
    // initialize a new instance of the filter before each test
    var formatTime;
    beforeEach(inject(function ($filter) {
        formatTime = $filter('formatTime');
    }));

    it('should return the input prefixed with "formatTime filter:"', function () {
        var text = 'angularjs';
        expect(formatTime(text)).toBe('formatTime filter: ' + text);
    });

});
