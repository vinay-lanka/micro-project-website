var app = angular.module('microApp', []);
app.controller('controller', function($scope, $http, $interval) {
  $http.get("/refresh")
  .then(function(response) {
    $scope.data = response.data;
    console.log(response.data);
  });
  $scope.refresh = function () {
    $http.get("/refresh")
  .then(function(response) {
    $scope.data = response.data;
    if($scope.data.status==1){
      $scope.data.state = "Assistance Required!";
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      console.log($scope.data);
    }else{
      $scope.data.state = "It's all good";
      console.log($scope.data);
    }
    console.log(response.data);
  });
};
$interval($scope.refresh, 5000);
});