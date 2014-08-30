'use strict';

angular.module('foosenshaftApp')
.config(function ($routeProvider) {
    $routeProvider
    .when('/match', {
        templateUrl: 'app/match/match.html',
        controller: 'MatchCtrl',
        controllerAs: 'match'
    });
});
