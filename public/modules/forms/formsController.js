angular.module('app').controller('formsController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $("#next").click(function(){
        $('#firstModal').modal('hide');
        $('#secondModal').modal('show');
    });
}]);