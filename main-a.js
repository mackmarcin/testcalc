'use strict';

angular
    .module('myApp', [])
    .controller('AppCtrl', function Controller($scope) {
        $scope.calculate = function (symbol) {
            $scope.result = eval($scope.v1 + symbol + $scope.v2);
        }
    });
