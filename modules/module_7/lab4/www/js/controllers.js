angular.module('app.controllers', ['ionic'])

.controller('actionSheetCtrl', ['$scope', '$stateParams', '$ionicActionSheet', '$timeout',

function ($scope, $ionicActionSheet, $timeout) {
  // Elemento inicial para abrir el actionSheet
  $scope.show = function(){
    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: '<b>Share</b> This' },
        { text: 'Move' }
      ],
      destructiveText: 'Delete',
      titleText: 'Modify your album',
      cancelText: 'Cancel',
      cancel: function() {
        // add cancel code..
      },
      buttonClicked: function(index){
        console.log(index);
      }
    });

    // For example's sake, hide the sheet after two seconds
    $timeout(function(){
      hideSheet();
    }, 2000);

  };
}])

.controller('modalCtrl', ['$scope', '$ionicModal',
function ($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/modal-template.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });


  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
}])

.controller('popupsCtrl', ['$scope', '$ionicPopup', '$timeout',
function ($scope, $ionicPopup, $timeout) {
  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    $scope.data = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="password" ng-model="data.name">',
      title: 'Ingrese su nombre',
      subTitle: 'Por favor su nombre',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.name) {

              e.preventDefault();
            } else {
              return $scope.data.name;
            }
          }
        }
      ]
    });

    myPopup.then(function(res) {
      console.log('Ingreso: ', res);
    });

    $timeout(function() {
      myPopup.close(); //Cierra despues de 8 segundos
    }, 8000);
  };

  // A confirm dialog
  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Consume Ice Cream',
      template: 'Are you sure you want to eat this ice cream?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });
  };

  // An alert dialog
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Don\'t eat that!',
      template: 'It might taste good'
    });

    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone');
    });
  };
}])

.controller('slideCtrl', ['$scope', '$ionicSlideBoxDelegate',
function ($scope, $ionicSlideBoxDelegate) {
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }

  $scope.previousSlide = function() {
    $ionicSlideBoxDelegate.previous();
  }
}])

.controller('homeCtrl', ['$scope', '$stateParams',
  function ($scope, $stateParams) {
}])

.controller('loadingCtrl', ['$scope', '$ionicLoading',
  function ($scope, $ionicLoading) {
    $scope.show = function() {
      var load = $ionicLoading.show({
        template: 'Loading...'
      });

      load.then(function(){
        console.log("The loading indicator is now displayed");
      });
    };

    $scope.hide = function(){
      $ionicLoading.hide().then(function(){
        console.log("The loading indicator is now hidden");
      });
    };
}]);
