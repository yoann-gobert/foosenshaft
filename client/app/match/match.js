'use strict';

angular.module('foosenshaftApp')
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/match/match.html',
        controller: 'MatchCtrl'
    });
});
