//create the module
var app = angular.module('app', ['ngRoute']);

//configure routes
app.config(function($routeProvider){
    $routeProvider
        // route for the cookbook
        .when('/', {
            templateUrl : 'modules/cookbook/cookbook.html'
        })

        // route for the explore page
        .when('/explore', {
            templateUrl : 'modules/explore/explore.html'
        })
        .otherwise({
            redirect: '/'
        });
});

window.onload = function () {
    //active navbar
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
};