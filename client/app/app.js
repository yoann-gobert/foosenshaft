'use strict';

angular.module('foosenshaftApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'btford.socket-io',
    'ui.bootstrap',
    'ngDraggable'
])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
});
