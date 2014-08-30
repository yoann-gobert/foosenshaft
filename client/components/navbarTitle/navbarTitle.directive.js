'use strict';

angular.module('foosenshaftApp')
.directive('navbarTitle', function ($rootScope, $animate, navbar) {
    return {
        templateUrl: 'components/navbarTitle/navbarTitle.html',
        restrict: 'A',
        link: function (scope, element) {

            $rootScope.$on('newTitle', function(){
                //replace the title
                scope.titles.push(navbar.getTitle());
                scope.titles.shift();
            });

            scope.titles = [navbar.getTitle()];
        }
    };
});
