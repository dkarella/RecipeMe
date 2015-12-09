/**
 * Created by danny on 12/8/15.
 */
angular.module('app').controller('recipeController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location){

    var recipeId = $routeParams.id;
    console.log(recipeId);
    $http.get('api/recipes/' + recipeId).then(
        function(recipe){
            $scope.recipe = recipe.data[0];
            console.log($scope.recipe);

            var f = new Fraction(0.5);
            console.log(f.numerator + '/' + f.denominator)
        },
        function(){
            $location.url('/');
            $scope.message = "GET failed!";
        }
    );
}]);