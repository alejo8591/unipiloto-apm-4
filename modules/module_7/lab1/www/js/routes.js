angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('buttons', {
    url: '/page1',
    templateUrl: 'templates/buttons.html',
    controller: 'buttonsCtrl'
  })

  .state('list', {
    url: '/page2',
    templateUrl: 'templates/list.html',
    controller: 'listCtrl'
  })

  .state('cards', {
    url: '/page3',
    templateUrl: 'templates/cards.html',
    controller: 'cardsCtrl'
  })

  .state('form', {
    url: '/page4',
    templateUrl: 'templates/form.html',
    controller: 'formCtrl'
  })

  .state('toggle', {
    url: '/page5',
    templateUrl: 'templates/toggle.html',
    controller: 'toggleCtrl'
  })

  .state('checkbox', {
    url: '/page6',
    templateUrl: 'templates/checkbox.html',
    controller: 'checkboxCtrl'
  })

  .state('radioButton', {
    url: '/page7',
    templateUrl: 'templates/radioButton.html',
    controller: 'radioButtonCtrl'
  })

  .state('range', {
    url: '/page8',
    templateUrl: 'templates/range.html',
    controller: 'rangeCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});