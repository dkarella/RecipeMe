angular.module('app').controller('exploreController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $http.get('/api/recipes/').then(
            function(recipes){
                $scope.recipes = recipes.data;
            },
            function(){
                $location.url('/');
                $scope.message = "GET failed!";
            }
        );
    
}]);