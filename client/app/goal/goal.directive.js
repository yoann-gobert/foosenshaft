'use strict';

angular.module('foosenshaftApp')
.directive('goal', function () {
    return {
        templateUrl: 'app/goal/goal.html',
        restrict: 'A',
        scope: {
            goal: '=',
            goalAgainstTeam: '@'
        },
        replace: true,
        translude: true,
        link: function (scope, element) {

            function handleDragStart(e){
                this.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('goal', JSON.stringify(scope.goalData));
            }
            function handleDragEnd(){
                this.classList.remove('dragging');
            }

            function attachEventHandlers(element){
                element.addEventListener('dragstart', handleDragStart, false);
                element.addEventListener('dragend', handleDragEnd, false);
            }

            scope.goalData = {
                name: scope.goal,
                value: (scope.goalAgainstTeam)? -1 : 1
            };

            attachEventHandlers(element[0]);
        }
    };
});
