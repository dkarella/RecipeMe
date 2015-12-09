angular.module('app').controller('groceryController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.ingredients = [];
    $http.get('/api/groceries/').then(
            function(recipes){
                for(i = 0; i < recipes.data.length; i++){
                    for(j = 0; j < recipes.data[i].ingredients.length; j++){
                        $scope.ingredients.push(recipes.data[i].ingredients[j]);
                    }
                }
                console.log($scope.ingredients[0]);
            },
            function(){
                $location.url('/');
                $scope.message = "GET failed!";
            }
        );
}]);