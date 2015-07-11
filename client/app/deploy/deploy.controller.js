'use strict';

/**
 * @ngdoc function
 * @name gpsDeployClientApp.controller:DeployCtrl
 * @description
 * # DeployCtrl
 * Controller of the gpsDeployClientApp
 */
angular.module('dashboardApp')
  .controller('DeployCtrl', function($scope, $timeout, gitService, pivotalService, MAX_RELEASES) {
    /**
     * [latestDeploy description]
     * @type {Object}
     */
    $scope.latestDeploy = {};

    /**
     * [currentStories description]
     * @type {Array}
     */
    $scope.currentStories = [];

    /**
     * [latestDeploys description]
     * @type {Array}
     */
    $scope.latestDeploys = [{
      date: 1436243766307,
      webRelease: 'v0.27',
      status: 'error',
      logFile: 'http://www.google.co.ve/'
    }, {
      date: 1436243764307,
      webRelease: 'v0.28',
      status: 'success',
      logFile: 'http://www.google.co.ve/'
    }, {
      date: 1436243760307,
      webRelease: 'v0.29',
      status: 'success',
      logFile: 'http://www.google.co.ve/'
    }];

    /**
     * [stories description]
     * @type {Array}
     */
    $scope.stories = [];
    pivotalService.fetchStories(

      // successCallback
      function(data, status, headers, config) {
        var stories = [];
        data.stories.stories.forEach(function(story) {
          story.labels.forEach(function(label) {
            if (stories[label.name]) {
              stories[label.name].push(story);
            } else {
              stories[label.name] = [];
            }
          });
        });
        $scope.stories = stories;
      }.bind($scope),

      // errorCallback
      function(data, status, headers, config) {
        $scope.stories = [];
        alert('An error has been ocurred');
        console.log(data, status, headers, config);
      }.bind($scope)
    );

    /**
     * [releases description]
     * @type {Array}
     */
    $scope.releases = [];
    gitService.fetchReleases(

      // successCallback
      function(data, status, headers, config) {
        $scope.releases = data.slice(0, MAX_RELEASES);
      }.bind($scope),

      // errorCallback
      function(data, status, headers, config) {
        $scope.releases = [];
        alert('An error has been ocurred');
        console.log(data, status, headers, config);
      }.bind($scope)
    );

    /**
     * [updateCrrentStories description]
     * @param  {[type]} tagSelected [description]
     * @return {[type]}             [description]
     */
    $scope.updateCrrentStories = function(tagSelected) {
      if (!tagSelected) {
        $scope.currentStories = [];
        return;
      }

      $scope.currentStories = $scope.stories[tagSelected];
    };

    /**
     * [runDeploy description]
     * @param  {[type]} latestDeploys [description]
     * @return {[type]}               [description]
     */
    $scope.runDeploy = function(latestDeploys) {
      if (!$scope.latestDeploy.webRelease) {
        return;
      }

      $scope.latestDeploy.buttonText = 'Working...';

      $timeout(function() {
        $scope.latestDeploy.date = (new Date()).getTime();
        $scope.latestDeploy.status = 'success';
        $scope.latestDeploy.logFile = 'http://www.wlacruz.com.ve';
        $scope.latestDeploy.isNew = true;

        $scope.latestDeploys.push($scope.latestDeploy);
        $scope.latestDeploy = {};
      }.bind($scope), 500);
    };
  });
