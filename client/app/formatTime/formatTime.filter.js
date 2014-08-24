'use strict';

angular.module('foosenshaftApp')
.filter('formatTime', function () {

    function zeroPadding(number){
        return(1e3+number+"").slice(-2);
    }

    return function (input) {

        var seconds = input % 60;
        var minutes = Math.floor(input / 60);
        var hours = Math.floor(minutes / 60);

        return zeroPadding(hours) + ':' + zeroPadding(minutes) + ':' + zeroPadding(seconds);
    };
});
