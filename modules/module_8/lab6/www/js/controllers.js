angular.module('app.controllers', ['ngCordova'])

.controller('pageOneCtrl', ['$scope', '$state',
function ($scope, $state){
  $scope.getCurrentGeolocation = function(){
    $state.go('page2');
  };

  $scope.getWatchGeolocation = function(){
    $state.go('page3');
  };
}])

.controller('pageTwoCtrl', ['$scope','$cordovaGeolocation',
  function ($scope, $cordovaGeolocation){
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        $scope.lat  = position.coords.latitude;
        $scope.long = position.coords.longitude;
      }, function(err) {
        console.log(err);
      });
}])

.controller('pageThreeCtrl', ['$scope','$cordovaGeolocation',
  function ($scope, $cordovaGeolocation){
    var watchOptions = {
      timeout : 3000,
      enableHighAccuracy: false // may cause errors if true
    };

    var watch = $cordovaGeolocation.watchPosition(watchOptions);

    watch.then(
      null,
      function(err) {
        console.log(err);
      },
      function(position) {
        $scope.lat  = position.coords.latitude;
        $scope.long = position.coords.longitude;
      });

    $scope.stopGeolocation = function(){
      watch.clearWatch();
    };
}]);
