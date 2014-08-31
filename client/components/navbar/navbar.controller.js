'use strict';

angular.module('foosenshaftApp')
.controller('NavbarCtrl', function ($rootScope, $scope, $window, $timeout, navbar, sidePanel) {

    this.showBackButton = navbar.getShowBackButton();
    $rootScope.$on('showBackButton', function(){
        $scope.showBackButton = navbar.getShowBackButton();
    });

    this.actionButtons = navbar.getActionButtons();
    $rootScope.$on('newActionButtons', function(){
        $scope.actionButtons = navbar.getActionButtons();
    });

    $scope.back = function(){
        $rootScope.isBack = true;
        $window.history.back();
        //remove the back class after the animations are finished plus a 100ms of margin
        $timeout(function(){
            $rootScope.isBack = false;
        }, 400);
    };

    $scope.navbarAction = function(panelData){
        sidePanel.setPanel(panelData);
        sidePanel.openPanel();
    };


});
