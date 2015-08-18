'use strict';

/**
 * @ngdoc overview
 * @name deepthoughtuiApp
 * @description
 * # deepthoughtuiApp
 *
 * Main module of the application.
 */
angular
  .module('netmgmt', [
    'ui.router',
    'restangular',
    'ngAnimate'
  ])
  .config(['$urlRouterProvider', '$stateProvider',  function($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('dash', {
        url: '/dash',
        templateUrl: 'views/dash.html',
        controller: 'DashCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .state('networks', {
        url: '/networks',
        templateUrl: 'views/networks.list.html',
        controller: 'NetworksListCtrl'
      })
      .state('network', {
        url: '/networks/:name',
        templateUrl: 'views/networks.show.html',
        controller: 'NetworkListCtrl'
      })
      .state('network.add', {
        url: '/reserve',
        templateUrl: 'views/networks.add.html',
        controller: 'AddCtrl'
      });
      $urlRouterProvider.otherwise('/networks');
  }])
  .run(['Restangular', '$rootScope', '$location', '$http', function (Restangular, $rootScope, $location, $http) {
    $rootScope.baseUrl = 'http://netmgmt.stxt.media.int:9001/';
    Restangular.setBaseUrl($rootScope.baseUrl);


  }]);
