'use strict';

angular.module('foosenshaftApp')
.service('sidePanel', function ($rootScope) {

    var panelData = {};

    this.getPanelData = function(){
        return panelData;
    };

    this.setPanel = function(data){
        panelData = data;
    };

    this.openPanel = function(){
        $rootScope.$emit('sidePanelOpen');
        $rootScope.sidePanelOpen = true;
    };

});
