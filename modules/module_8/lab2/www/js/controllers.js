angular.module('app.controllers', ['ngCordova'])

.controller('page1Ctrl', ['$scope', '$stateParams', '$cordovaDevice',
function ($scope, $stateParams, $cordovaDevice) {
	$scope.setDeviceInformation = function(){
		localStorage.setItem('device',$cordovaDevice.getDevice());

    	localStorage.setItem('cordova',$cordovaDevice.getCordova());

   		localStorage.setItem('model',$cordovaDevice.getModel());

    	localStorage.setItem('platform',$cordovaDevice.getPlatform());

  		localStorage.setItem('uuid',$cordovaDevice.getUUID());

    	localStorage.setItem('version',$cordovaDevice.getVersion());
	}

}])

.controller('page2Ctrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
	$scope.getDeviceInformation = function(){
		$scope.device =localStorage.getItem('device');

    	$scope.cordova =localStorage.getItem('cordova');

   		$scope.model =localStorage.getItem('model');

    	$scope.platform =localStorage.getItem('platform');

  		$scope.uuid =localStorage.getItem('uuid');

    	$scope.version =localStorage.getItem('version');
	}
}])

.controller('cloudCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {}]);
