angular.module('app').controller('groceryController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.ingredients = [];
    $http.get('/api/groceries/').then(
            function(recipes){
                $scope.recipes = recipes.data;
                console.log($scope.recipes);
            },
            function(){
                $location.url('/');
                $scope.message = "GET failed!";
            }
        );
}]);