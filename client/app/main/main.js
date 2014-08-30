'use strict';

angular.module('foosenshaftApp')
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    });
});
