angular.module('app.controllers', ['ngCordova', 'ionic'])

.controller('alertCtrl', ['$scope', '$cordovaDialogs',
function ($scope, $cordovaDialogs) {
  $cordovaDialogs.alert('Mensaje del alerta', 'Alerta', 'Aceptar')
    .then(function() {
      console.log('Alert ok');
    });
}])

.controller('confirmCtrl', ['$scope', '$cordovaDialogs',
function ($scope, $cordovaDialogs) {
  $cordovaDialogs.confirm('Mensaje del confirm', 'Confirm', ['Cancelar','Aceptar'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = buttonIndex;
      console.log(btnIndex);
    });
}])

.controller('promptCtrl', ['$scope', '$cordovaDialogs',
function ($scope, $cordovaDialogs) {
  $cordovaDialogs.prompt('Mensaje para el prompt', 'Prompt', ['Uso 1','Uso 2'], 'Escriba aquí')
    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = result.buttonIndex;
      console.log(input, btnIndex);
    });

}]);
