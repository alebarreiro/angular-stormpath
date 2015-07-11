'use strict';

/**
 * @ngdoc service
 * @name gpsDeployClientApp.constants
 * @description
 * # constants
 * Constant in the gpsDeployClientApp.
 */
angular.module('dashboardApp')
  .constant('MAX_RELEASES', 5)
  .constant('PIVOTAL_API_TOKEN', '0eeed9a1ac78660a9295de66a71db0df')
  .constant('GITHUB_API_TOKEN', '6c47368ba7ee362b2713b024705a903c2edbeef2')
  .constant('PIVOTAL_STORY_QUERY', 'https://www.pivotaltracker.com/services/v5/projects/878273/search?query=')
  .constant('GITHUB_ACCESS_URL', 'https://api.github.com/repos/GearStream/GPS-Platform/tags?&access_token=');
