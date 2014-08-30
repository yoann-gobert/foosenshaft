'use strict';

angular.module('foosenshaftApp')
.controller('NavbarCtrl', function ($rootScope, $scope, $window, $timeout, navbar) {

    this.showBackButton = navbar.getShowBackButton();
    $rootScope.$on('showBackButton', function(){
        $scope.showBackButton = navbar.getShowBackButton();
    });

    $scope.back = function(){
        $rootScope.isBack = true;
        $window.history.back();

        $timeout(function(){
            $rootScope.isBack = false;
        }, 400);

    };

});
