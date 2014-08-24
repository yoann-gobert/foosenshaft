'use strict';

angular.module('foosenshaftApp')
.filter('formatScore', function () {
    return function (input) {
        if(input && input.length <= 2){
            return input[0] + '-' + input[1];
        }else{
            return input;
        }
    };
});
