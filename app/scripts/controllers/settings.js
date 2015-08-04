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
  }]);
