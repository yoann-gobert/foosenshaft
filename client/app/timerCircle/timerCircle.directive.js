'use strict';

angular.module('foosenshaftApp')
.directive('timerCircle', function () {
    var maxRadius = 140;
    function updateState(value, total, R) {
        var center;
        var alpha = 360 / total * value,
        a = (90 - alpha) * Math.PI / 180,
        x = maxRadius + R * Math.cos(a),
        y = maxRadius - R * Math.sin(a),
        path;
        if (total == value) {
            path = 'M'+ maxRadius +','+ (maxRadius - R) +' A'+ R+','+ R+','+ 0+','+ 1+','+ 1+','+ (maxRadius - 0.1) +','+ (maxRadius - R);
        } else {
            if(alpha > 180) {
                center = 1;
            } else {
                center = 0;
            }
            path = 'M'+ maxRadius+','+ (maxRadius - R) +' A'+ R+','+ R+','+ 0+',' + center +","+ 1+','+ x+','+ y;
        }
        return path;
    }

    return {
        templateUrl: 'app/timerCircle/timerCircle.html',
        restrict: 'A',
        scope: {
            timerCircle: '='
        },
        link: function (scope, element) {



            var secondsPathElement = element[0].querySelector('.progress-seconds');
            var minutesPathElement = element[0].querySelector('.progress-minutes');

            scope.$watch('timerCircle', function(newValue){

                var seconds = newValue % 60;
                if(newValue !== 0 && seconds === 0){
                    seconds = 60;
                }

                var pathSeconds = updateState(seconds , 60, 125);
                var pathMinutes = updateState(Math.floor(newValue / 60), 60, 135);
                secondsPathElement.setAttribute('d', pathSeconds);
                minutesPathElement.setAttribute('d', pathMinutes);

            });

        }
    };
});
