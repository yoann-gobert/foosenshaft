'use strict';

angular.module('foosenshaftApp')
.config(function ($routeProvider) {
    $routeProvider
    .when('/new-match', {
        templateUrl: 'app/new-match/new-match.html',
        controller: 'NewMatchCtrl'
    });
});
