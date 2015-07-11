'use strict';

/**
 * @ngdoc service
 * @name gpsDeployClientApp.pivotalService
 * @description
 * # pivotalService
 * Service in the gpsDeployClientApp.
 */
angular.module('dashboardApp')
  .service('pivotalService', function($http, PIVOTAL_STORY_QUERY, PIVOTAL_API_TOKEN) {
    /**
     * [getStories description]
     * @param  {[type]} successCallback [description]
     * @param  {[type]} errorCallback   [description]
     * @return {[type]}                 [description]
     */
    this.fetchStories = function(successCallback, errorCallback) {
      /**
       * [options description]
       * @type {Object}
       */
      var options = {
        method: 'GET',
        url: PIVOTAL_STORY_QUERY + 'label:v*', // v* means all starts with v
        headers: {
          'X-TrackerToken': PIVOTAL_API_TOKEN
        }
      };
      $http(options)
        .success(successCallback)
        .error(errorCallback);
    };
  });
