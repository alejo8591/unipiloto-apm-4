angular.module('app.controllers', ['ngCordova'])

.controller('pageOneCtrl', ['$scope', '$state',
function ($scope, $state){
  $scope.getPictureBase64Enconded = function(){
    $state.go('page2');
  };

  $scope.getPictureFileLocation = function(){
    $state.go('page3');
  }
}])

.controller('pageTwoCtrl', ['$scope','$cordovaCamera',
  function ($scope, $cordovaCamera){

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $scope.getPictureBase64Enconded = function(){
      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myImg');
        image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        console.log(err);
      });
    };
}])

.controller('pageThreeCtrl', ['$scope','$cordovaCamera',
  function ($scope, $cordovaCamera){
    var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA
    };

    $scope.getPictureFileLocation = function(){
      $cordovaCamera.getPicture(options).then(function(imageURI) {
        var image = document.getElementById('myImg');
        image.src = imageURI;
      }, function(err) {
        console.log(err);
      });
    };

    $cordovaCamera.cleanup().then(); // only for FILE_URI
}]);
