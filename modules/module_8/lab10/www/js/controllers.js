angular.module('app.controllers', ['ngCordova'])

.controller('pageCtrl', ['$scope', '$cordovaCapture',
function ($scope, $cordovaCapture) {

  $scope.captureAudio = function() {
    var options = { limit: 3, duration: 10 };

    $cordovaCapture.captureAudio(options).then(function(audioData) {
      console.log(audioData);
    }, function(err) {
      console.log(err);
    });
  };

  $scope.captureImage = function() {
    var options = { limit: 3 };

    $cordovaCapture.captureImage(options).then(function(imageData) {
      console.log(imageData);

    }, function(err) {
      console.log(err);
    });
  };

  $scope.captureVideo = function() {
    var options = { limit: 3, duration: 15 };

    $cordovaCapture.captureVideo(options).then(function(videoData) {
      console.log(videoData);
    }, function(err) {
      console.log(err);
    });
  };

}]);
