angular.module('app.controllers', ['ngCordova'])

.controller('pageCtrl', ['$scope', '$cordovaDevice',
function ($scope, $cordovaDevice) {
	$scope.getDeviceInformation = function(){
		$scope.device = $cordovaDevice.getDevice();

    	$scope.cordova = $cordovaDevice.getCordova();

    	$scope.model = $cordovaDevice.getModel();

    	$scope.platform = $cordovaDevice.getPlatform();

    	$scope.uuid = $cordovaDevice.getUUID();

    	$scope.version = $cordovaDevice.getVersion();
	}

}]);
