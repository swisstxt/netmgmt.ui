'use strict';

/**
 * @ngdoc function
 * @name netmgmt.controller:NetworkListCtrl
 * @description
 * # NetworkListCtrl
 * Controller of the netmgmt
 */

angular.module('netmgmt')
    .controller('NetworkListCtrl', [
          '$scope',
          'Restangular',
          '$state',
          '$stateParams',
      function ($scope, Restangular, $state, $stateParams) {
            $scope.name = $stateParams.name;
            var baseNetwork = Restangular.one('networks',  $scope.name);

            $scope.reloadScope = function() {
              baseNetwork.getList('list').then(function(network) {
                $scope.network = network;
              }, function errorCallback() {
                console.log('Failed to fetch nodes from server');
              });

            
            };

            $scope.search = function (row) {
              return (angular.lowercase(row.ip).indexOf($scope.query || '') !== -1 || angular.lowercase(row.desc).indexOf($scope.query || '') !== -1 || angular.lowercase(row.name).indexOf($scope.query || '') !== -1);
            };

            $scope.reloadScope();
  }]);
