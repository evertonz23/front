angular.module('front', []);

angular.module('front').controller('MainController', function ($scope, $http) {
  
  $http.get('https://demo-api-back.herokuapp.com/people').then(function (response) {
    $scope.lista = response.data._embedded.people;
  })

});