'use strict';

angular.module('foosenshaftApp')
.controller('SidePanelCtrl', function ($scope, $rootScope, sidePanel) {

    this.panelData = null;

    $rootScope.$on('sidePanelOpen', function(){
        $scope.panelData = sidePanel.getPanelData();
    });

    $scope.closePanel = function(){
        $rootScope.sidePanelOpen = false;
    };

});
