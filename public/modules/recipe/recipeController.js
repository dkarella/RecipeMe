/**
 * Created by danny on 12/8/15.
 */
angular.module('app').controller('recipeController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location){
        $scope.message = '';
        var recipeId = $routeParams.id;
        console.log(recipeId);
        $http.get('api/recipes/' + recipeId).then(
            function(recipe){
                $scope.recipe = recipe.data[0];
                console.log($scope.recipe);
            },
            function(){
                $location.url('/');
                $scope.message = "GET failed!";
            }
        );

        $scope.addToGroceryList = function(){
            $http.post('api/groceries/add/', {"recipe" : $scope.recipe._id}).then(
                function(){
                    $scope.message = 'Successfuly added recipe to grocery list!';
                }
            )
        };

        $scope.addToCookbook = function(){
            console.log('hello: ' + $scope.recipe._id);
            $http.get('api/recipes/save/' + $scope.recipe._id).then(
                function(){
                    console.log('hello there!');
                    $scope.message = 'Successfuly added recipe to your cookbook!';
                }
            )
        };
}]);

//{
//    "recipe": {"_id": "56655cb56fc867b25b0db84d"}
//}