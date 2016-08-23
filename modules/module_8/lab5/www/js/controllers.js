angular.module('app.controllers', ['ngCordova'])

.controller('pageOneCtrl', ['$scope', '$state',
function ($scope, $state){
  $scope.getCurrentDeviceOrientation = function(){
    $state.go('page2');
  }

  $scope.getWatchDeviceOrientation = function(){
    $state.go('page3');
  }
}])

.controller('pageTwoCtrl', ['$scope','$cordovaDeviceOrientation',
  function ($scope, $cordovaDeviceOrientation){
    $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
      $scope.magneticHeading = result.magneticHeading;
      $scope.trueHeading = result.trueHeading;
      $scope.accuracy = result.headingAccuracy;
      $scope.timeStamp = result.timestamp;
    }, function(err) {
      console.log(err);
    });

}])

.controller('pageThreeCtrl', ['$scope','$cordovaDeviceOrientation',
  function ($scope, $cordovaDeviceOrientation){
    var options = {
      frequency: 3000,
      filter: true     // if frequency is set, filter is ignored
    };

    var watch = $cordovaDeviceOrientation.watchHeading(options).then(
      null,
      function(err) {
        console.log(err);
      },
      function(result) {   // updates constantly (depending on frequency value)
        $scope.magneticHeading = result.magneticHeading;
        $scope.trueHeading = result.trueHeading;
        $scope.accuracy = result.headingAccuracy;
        $scope.timeStamp = result.timestamp;
      });
    $scope.stopDeviceOrientation = function(){
      watch.clearWatch();
    };
}]);
