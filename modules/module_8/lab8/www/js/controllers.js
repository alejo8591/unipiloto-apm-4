angular.module('app.controllers', ['ngCordova'])

.controller('pageOneCtrl', ['$scope', '$state',
function ($scope, $state){
  $scope.setInfo = function(){
    $state.go('page2');
  };

  $scope.getInfo = function(){
    $state.go('page3');
  }
}])

.controller('pageTwoCtrl', ['$scope','$cordovaSQLite',
  function ($scope, $cordovaSQLite){
    var db = $cordovaSQLite.openDB({ name: "test.db" });

    $scope.createInfo = function(){
      var create_table = 'CREATE TABLE IF NOT EXISTS test_table (name, email, phone)';
      var insert_table = "INSERT INTO test_table (name, email, phone) VALUES (?,?,?);";
      // Crear Tabla
      $cordovaSQLite.execute(db, create_table, []).then(function(res){
        console.log("create table: " + res);
      }, function(err){
        console.error(err);
      });
      // Insertar Tabla
      $cordovaSQLite.execute(db, insert_table, [$scope.contactForm.name, $scope.contactForm.email, $scope.contactForm.phone]).then(function(res){
        console.log("insert: " + res);
      }, function(err){
        console.error(err);
      });
    };
}])

.controller('pageThreeCtrl', ['$scope','$cordovaSQLite',
  function ($scope, $cordovaSQLite){
    var db = $cordovaSQLite.openDB({ name: "test.db" });
    // Consultar Tabla
    $scope.getInfo = function(){
      var query = "SELECT * FROM test_table;";
      $cordovaSQLite.execute(db, query, []).then(function(res){
        console.log("insert: " + res.rows.item(0));
        $scope.info = res.rows.item(0);
      }, function(err){
        console.error(err);
      });
    };
}]);
