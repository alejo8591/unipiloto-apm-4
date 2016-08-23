angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('dialogs.alert', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/alert.html',
        controller: 'alertCtrl'
      }
    }
  })

  .state('dialogs.confirm', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/confirm.html',
        controller: 'confirmCtrl'
      }
    }
  })

  .state('dialogs.prompt', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/prompt.html',
        controller: 'promptCtrl'
      }
    }
  })

  .state('dialogs', {
    url: '/page1',
    templateUrl: 'templates/dialogs.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')



});
