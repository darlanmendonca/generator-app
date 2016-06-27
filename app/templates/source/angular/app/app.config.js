'use strict';

angular
  .module('<%= applicationSlug %>')
  .config(homeConfig);

function homeConfig($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}
