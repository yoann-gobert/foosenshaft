'use strict';

angular.module('foosenshaftApp')
.config(function ($routeProvider) {
    $routeProvider
    .when('/main', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
    });
});
