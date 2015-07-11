'use strict';

/**
 * @ngdoc service
 * @name gpsDeployClientApp.gitService
 * @description
 * # gitService
 * Service in the gpsDeployClientApp.
 */
angular.module('dashboardApp')
  .service('gitService', function($http, GITHUB_ACCESS_URL, GITHUB_API_TOKEN) {
    /**
     * [fetchReleases description]
     * @param  {[type]} successCallback [description]
     * @param  {[type]} errorCallback   [description]
     * @return {[type]}                 [description]
     */
    this.fetchReleases = function(successCallback, errorCallback) {
      $http.get(GITHUB_ACCESS_URL + GITHUB_API_TOKEN)
        .success(successCallback)
        .error(errorCallback);
    };
  });
