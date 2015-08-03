'use strict';

/**
 * @ngdoc function
 * @name netmgmt.controller:NetworksListCtrl
 * @description
 * # NetworksListCtrl
 * Controller of the netmgmt
 */

angular.module('netmgmt')
    .controller('NetworksListCtrl', [
          '$scope',
          'Restangular',
          '$state',
          '$stateParams',
      function ($scope, Restangular, $state, $stateParams) {
            var baseNetworks = Restangular.all('networks');
            $scope.reloadScope = function() {
              baseNetworks.getList('list').then(function(networks) {
            $scope.networks = networks;    

          }, function errorCallback() {
            console.log('Failed to fetch networks from server');
          });           
        };

        $scope.reloadScope();    
  }]);
