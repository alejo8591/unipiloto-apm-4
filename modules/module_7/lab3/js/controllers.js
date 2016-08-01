angular.module('app.controllers', [])
     
.controller('cameraTabDefaultPageCtrl', function($scope, $state) {
	$scope.yepp = 'HELLO';
	$scope.goToPage = function(_email, _pass, _description){
		localStorage.setItem('email', _email);
		localStorage.setItem('pass', _pass);
		localStorage.setItem('description', _description);
		$state.go('tabsController.cartTabDefaultPage');
	}
})
   
.controller('cartTabDefaultPageCtrl', function($scope) {
	console.log(localStorage.getItem('email'));
	$scope.email = localStorage.getItem('email');
	$scope.pass = localStorage.getItem('pass');
	$scope.description = localStorage.getItem('description');

})
   
.controller('cloudTabDefaultPageCtrl', function($scope) {

})
    