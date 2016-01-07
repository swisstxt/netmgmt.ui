'use strict';

/**
 * @ngdoc function
 * @name netmgmt.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the netmgmt
 */

angular.module('netmgmt')
.controller('SettingsCtrl', [
    '$scope',
    'Restangular',
    '$state',
    '$stateParams',
    '$rootScope',
    function ($scope, Restangular, $state, $stateParams, $rootScope) {
        $scope.api = $rootScope.baseUrl
        var baseApiConfig = Restangular.one('conf');

        $scope.reloadScope = function() {
            baseApiConfig.get().then(function(settings) {
                $scope.apiSettings = settings;
            }, function errorCallback() {
                console.log('Failed to fetch config from server');
            });
        };

        $scope.reloadScope();
    }]);
