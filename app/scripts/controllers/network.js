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
            $scope.loading = true;
            $scope.hasRes = false;

            $scope.reloadScope = function() {
              baseNetwork.getList('list').then(function(network) {
                $scope.network = network;
                $scope.hasReservation(network);
                $scope.loading = false;
              }, function errorCallback() {
                console.log('Failed to fetch nodes from server');
              });
            };

            $scope.search = function (row) {
              return (angular.lowercase(row.ip).indexOf($scope.query || '') !== -1 || angular.lowercase(row.desc).indexOf($scope.query || '') !== -1 || angular.lowercase(row.name).indexOf($scope.query || '') !== -1);
            };

            $scope.hasReservation = function (nw) {
                var len = nw.length
                for (var i = 0; i < len; i++) {
                    if (nw[i].lock.comment != "") {
                        $scope.hasRes = true;
                        return
                    }
                }
                $scope.hasRes = false;
            };

            $scope.ipOrder = function(row){
                var octets = (row.ip).split(".");
                return (
                    (parseInt(octets[0])*Math.pow(256,3))+
                    (parseInt(octets[1])*Math.pow(256,2))+
                    (parseInt(octets[2])*256)+
                    parseInt(octets[3]));
            };

            $scope.reloadScope();
  }]);
