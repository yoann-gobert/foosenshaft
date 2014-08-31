'use strict';

describe('Service: sidePanel', function () {

    // load the service's module
    beforeEach(module('foosenshaftApp'));

    // instantiate service
    var sidePanel;
    beforeEach(inject(function (_sidePanel_) {
        sidePanel = _sidePanel_;
    }));

    it('should do something', function () {
        expect(!!sidePanel).toBe(true);
    });

});
