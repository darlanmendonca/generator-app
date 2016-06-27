'use strict';

angular
  .module('<%= applicationSlug %>')
  .config(homeConfig);

function homeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'main': {
          templateUrl: 'templates/home.template.html',
        },
      },
    });
}
