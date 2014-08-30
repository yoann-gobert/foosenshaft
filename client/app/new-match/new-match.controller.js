'use strict';

angular.module('foosenshaftApp')
.controller('NewMatchCtrl', function ($scope, navbar) {
    $scope.message = 'Hello';

    navbar.setTitle('New Match');
    navbar.setShowBackButton(true);
});
