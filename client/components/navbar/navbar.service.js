'use strict';

angular.module('foosenshaftApp')
.service('navbar', function ($rootScope) {

    var title = 'Foosenshaft';
    var showBackButton = false;

    this.getTitle = function(){
        return title;
    }

    this.setTitle = function(newTitle){
        if(newTitle !== title){
            title = newTitle;
            $rootScope.$emit('newTitle');
        }
    };

    this.getShowBackButton = function(){
        return showBackButton;
    }

    this.setShowBackButton = function(show){
        if(show !== showBackButton){
            showBackButton = show;
            $rootScope.$emit('showBackButton');
        }
    };

});
