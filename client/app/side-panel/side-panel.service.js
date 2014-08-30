'use strict';

angular.module('foosenshaftApp')
.service('sidePanel', function ($rootScope) {

    var panelData = {};

    this.getPanelData = function(){
        return panelData;
    }

    this.setPanel = function(action){
        switch (action) {
        case 'actionProfile':
            panelData = {
                title: 'Profile',
                panel: 'profile'
            }
            break;
        case 'actionSettings':
            panelData = {
                title: 'Settings',
                panel: 'settings'
            }
            break;
        }
    };

    this.openPanel = function(){
        $rootScope.$emit('sidePanelOpen');
        $rootScope.sidePanelOpen = true;
    };

});
