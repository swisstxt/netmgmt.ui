'use strict';

/**
 * @ngdoc function
 * @name netmgmt.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the netmgmt
 */
angular.module('netmgmt')
.controller('AddCtrl', [
    '$scope',
    '$rootScope',
    '$location',
    'Restangular',
    function ($scope, $rootScope, $location, Restangular) {
        $scope.$nwName = $scope.$parent.name;

        $scope.addReservation = function() {
            if ($scope.comment !== undefined && $scope.comment !== '') {
                var baseNetwork = Restangular.one('networks', $scope.$nwName);

                baseNetwork.post("",{comment: $scope.comment}).then(function() {
                    $scope.$parent.reloadScope();
                    $location.path('/networks/' + $scope.$nwName);
                }, function errorCallback() {
                    console.log("could not post");
                });

            } else {
                alert("No comment given");
            }
        };


    }]);
