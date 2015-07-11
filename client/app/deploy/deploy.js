'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('deploy', {
        url: '/deploy',
        templateUrl: 'app/deploy/deploy.html',
        controller: 'DeployCtrl'
      });
  });