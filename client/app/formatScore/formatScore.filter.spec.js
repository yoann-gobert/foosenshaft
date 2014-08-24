'use strict';

describe('Filter: formatScore', function () {

  // load the filter's module
  beforeEach(module('foosenshaftApp'));

  // initialize a new instance of the filter before each test
  var formatScore;
  beforeEach(inject(function ($filter) {
    formatScore = $filter('formatScore');
  }));

  it('should return the input prefixed with "formatScore filter:"', function () {
    var text = 'angularjs';
    expect(formatScore(text)).toBe('formatScore filter: ' + text);
  });

});
