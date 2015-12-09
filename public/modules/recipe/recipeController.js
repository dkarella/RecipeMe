/**
 * Created by danny on 12/8/15.
 */
angular.module('app').controller('recipeController', ['$scope', '$http', '$location', function($scope, $http){
    $http.get('api/')
}]);