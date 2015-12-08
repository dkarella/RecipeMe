angular.module('app').controller('formsController', ['$scope', '$http', '$location', function($scope, $http, $location){
    function showDialog2() {
    $("#dialog1").removeClass("fade").modal("hide");
    $("#dialog2").modal("show").addClass("fade");
}

$("#dialog1").modal("show");

$("#dialog-ok").on("click", function () {
    showDialog2();
});

$("#test").on("click", function () {
    $(".modal-backdrop").fadeOut("slow");
});
    
}]);