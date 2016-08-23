angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

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

$urlRouterProvider.otherwise('/page1')

});
