var app = angular.module('microApp', []);
app.controller('controller', function($scope, $http) {
  $http.get("/refresh")
  .then(function(response) {
    $scope.data = response.data;
    console.log(response.data);
  });
  $scope.refresh = function () {
    $http.get("/refresh")
  .then(function(response) {
    $scope.data = response.data;
    console.log(response.data);
  });
};
});