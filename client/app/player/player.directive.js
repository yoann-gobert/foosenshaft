'use strict';

angular.module('foosenshaftApp')
.directive('player', function () {
    return {
        templateUrl: 'app/player/player.html',
        restrict: 'A',
        scope: {
            player: '=',
            dropPlayer: '=',
            dropGoal: '='
        },
        replace: true,
        translude: true,
        link: function (scope, element) {

            function handleDragStart(e){
                this.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('player', JSON.stringify(scope.player));
            }
            function handleDragEnd(){
                this.classList.remove('dragging');
            }
            function handleDragEnter(){
                this.classList.add('drag-enter');
            }
            function handleDragLeave(){
                this.classList.remove('drag-enter');
            }
            function handleDragOver(e){
                this.classList.add('drag-enter');

                if (e.preventDefault) {
                    e.preventDefault(); // Necessary. Allows us to drop.
                }
                e.dataTransfer.dropEffect = 'move';
                return false;
            }
            function handleDrop(e){

                if (e.stopPropagation) {
                    e.stopPropagation(); // Stops some browsers from redirecting.
                }

                this.classList.remove('drag-enter');

                if(e.dataTransfer.getData('player') && typeof scope.dropPlayer === 'function'){
                    scope.dropPlayer(scope.player, JSON.parse(e.dataTransfer.getData('player')));
                }else if(e.dataTransfer.getData('goal') && typeof scope.dropGoal === 'function'){
                    scope.dropGoal(scope.player, JSON.parse(e.dataTransfer.getData('goal')));
                }

                return false;
            }

            function attachEventHandlers(element){
                element.addEventListener('dragstart', handleDragStart, false);
                element.addEventListener('dragend', handleDragEnd, false);
                element.addEventListener('dragenter', handleDragEnter, false);
                element.addEventListener('dragleave', handleDragLeave, false);
                element.addEventListener('dragover', handleDragOver, false);
                element.addEventListener('drop', handleDrop, false);
            }

            attachEventHandlers(element[0]);
        }
    };
});
