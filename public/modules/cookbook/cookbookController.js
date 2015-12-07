angular.module('app').controller('cookbookController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.recipes = [];
    $http.get('/api/recipes/').then(
            function(recipes){
                for(i = 0; i < recipes.data.length; i++){
                    if(recipes.data[i].saved){
                        $scope.recipes.push(recipes.data[i]);
                    }
                }
            },
            function(){
                $location.url('/');
                $scope.message = "GET failed!";
            }
        );
    
}]);