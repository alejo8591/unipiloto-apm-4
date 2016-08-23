angular.module('app.controllers', ['ngCordova'])

.controller('pageOneCtrl', ['$scope', '$state',
  function ($scope, $state){
    $scope.getCA = function(){
      $state.go('page2');
    };

    $scope.getWCA = function(){
      $state.go('page3');
    };
}])

.controller('pageTwoCtrl', ['$scope', '$cordovaDeviceMotion',
  function ($scope, $cordovaDeviceMotion) {
    $scope.getCurrentDeviceMotion = function(){
      $cordovaDeviceMotion.getCurrentAcceleration().then(function(result){
        $scope.x = result.x;
        $scope.y = result.y;
        $scope.z = result.z;
        $scope.timeStamp = result.timestamp;
      }, function(err) {
        console.log(err);
      });
  }
}])

.controller('pageThreeCtrl', ['$scope', '$cordovaDeviceMotion',
  function ($scope, $cordovaDeviceMotion) {
    var options = { frequency: 3000 };
    var watch = {};

    $scope.getWatchDeviceMotion = function(){
      watch = $cordovaDeviceMotion.watchAcceleration(options).then(function(result){
        $scope.x = result.x;
        $scope.y = result.y;
        $scope.z = result.z;
        $scope.timeStamp = result.timestamp;
      }, function(err) {
        console.log(err);
      });
    };

    $scope.getStopWatchDeviceMotion = function(){
      watch.clearWatch();
    }
}]);
