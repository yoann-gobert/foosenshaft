'use strict';

angular.module('foosenshaftApp')
.service('navbar', function ($rootScope) {

    var title = 'Foosenshaft';

    this.getTitle = function(){
        return title;
    }

    this.setTitle = function(newTitle){
        if(newTitle !== title){
            title = newTitle;
            $rootScope.$emit('newTitle');
        }
    };

});
