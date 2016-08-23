angular.module('app.controllers', ['ngCordova'])

.controller('pageOneCtrl', ['$scope', '$state',
function ($scope, $state){
  $scope.setContact = function(){
    $state.go('page2');
  }

  $scope.getContacts = function(){
    $state.go('page3');
  }
}])

.controller('pageTwoCtrl', ['$scope','$cordovaContacts',
  function ($scope, $cordovaContacts){
    $scope.addContact = function() {
      $cordovaContacts.save($scope.contactForm).then(function(result) {
        $scope.contact = result;
      }, function(err) {
        console.log(err);
      });
    };

  }])

.controller('pageThreeCtrl', ['$scope','$cordovaContacts',
  function ($scope, $cordovaContacts){
    $scope.getAllContacts = function(){
      $cordovaContacts.find().then(function (allContacts) {
        $scope.contacts = allContacts;
      });
    }
}]);
