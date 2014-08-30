'use strict';

angular.module('foosenshaftApp')
.controller('MainCtrl', function ($scope, $http, socket, localStorage) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
        $scope.awesomeThings = awesomeThings;
        socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
        if($scope.newThing === '') {
            return;
        }
        $http.post('/api/things', { name: $scope.newThing });
        $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
        $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
        socket.unsyncUpdates('thing');
    });

    if(localStorage.getItem('user')){
        this.user = localStorage.getItem('user');
    }else{
        this.user = {};
    }

});
