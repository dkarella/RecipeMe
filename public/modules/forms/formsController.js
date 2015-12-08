angular.module('app').controller('formsController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $("#nextto2").click(function(){
        $('#modal1').modal('hide');
        $('#modal2').modal('show');
    });
    $("#nextto3").click(function(){
        $('#modal2').modal('hide');
        $('#modal3').modal('show');
    });
    $("#nextto4").click(function(){
        $('#modal3').modal('hide');
        $('#modal4').modal('show');
    });
    $("#nextto5").click(function(){
        $('#modal4').modal('hide');
        $('#modal5').modal('show');
    });
    $("#backto1").click(function(){
        $('#modal2').modal('hide');
        $('#modal1').modal('show');
    });
    $("#backto2").click(function(){
        $('#modal3').modal('hide');
        $('#modal2').modal('show');
    });
    $("#backto3").click(function(){
        $('#modal4').modal('hide');
        $('#modal3').modal('show');
    });
    $("#backto4").click(function(){
        $('#modal5').modal('hide');
        $('#modal4').modal('show');
    });

    
}]);