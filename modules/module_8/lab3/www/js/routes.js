angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('page1', {
    url: '/page1',
    templateUrl: 'templates/page-one.html',
    controller: 'pageOneCtrl'
  })

  .state('page2', {
    url: '/page2',
    templateUrl: 'templates/page-two.html',
    controller: 'pageTwoCtrl'
  })

  .state('page3', {
    url: '/page3',
    templateUrl: 'templates/page-three.html',
    controller: 'pageThreeCtrl'
  })

$urlRouterProvider.otherwise('/page1');

});
