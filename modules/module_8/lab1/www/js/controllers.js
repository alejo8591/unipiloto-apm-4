angular.module('app.controllers', ['ngCordova'])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$cordovaDevice',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDevice) {
	$scope.getDeviceInformation = function(){
		$scope.device = $cordovaDevice.getDevice();

    	$scope.cordova = $cordovaDevice.getCordova();

    	$scope.model = $cordovaDevice.getModel();

    	$scope.platform = $cordovaDevice.getPlatform();

    	$scope.uuid = $cordovaDevice.getUUID();

    	$scope.version = $cordovaDevice.getVersion();
	}

}])
 