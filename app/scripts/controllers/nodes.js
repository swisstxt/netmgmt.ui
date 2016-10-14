'use strict';

/**
 * @ngdoc function
 * @name netmgmt.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the netmgmt
 */

angular.module('netmgmt')
.controller('NodesCtrl', [
    '$scope',
    'Restangular',
    '$state',
    '$stateParams',
    '$rootScope',
    function ($scope, Restangular, $state, $stateParams, $rootScope) {
        $scope.queried = false;
        $scope.success = false;
        $scope.failed_nodename = ""


        $scope.fetchNodeInfo = function() {
            var baseNodes = Restangular.one('nodes',$scope.nodename + '.' + $scope.domain);
            baseNodes.get().then(function(node) {
                $scope.node = node;
                $scope.queried = true;
                $scope.success = true;
            }, function errorCallback() {
                $scope.queried = true;
                $scope.success = false;
                $scope.failed_nodename = $scope.nodename + '.' + $scope.domain;
                console.log('Failed to fetch node infos from server');
            });
        };

    }]);
