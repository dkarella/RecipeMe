//create the module
var app = angular.module('app', ['ngRoute']);

//configure routes
app.config(function($routeProvider){
    $routeProvider
        // route for the cookbook
        .when('/', {
            templateUrl : 'modules/cookbook/cookbook.html',
            controller: 'cookbookController'
        })

        // route for the explore page
        .when('/explore', {
            templateUrl : 'modules/explore/explore.html', 
            controller: 'exploreController'
        })
        .when('/recipe/:name', {
            templateUrl : 'modules/recipe/recipe.html'
        })
        .when('/grocery', {
            templateUrl: 'modules/grocery/grocery.html',
            controller: 'groceryController'
        })
        .when('/forms', {
            templateUrl: 'modules/forms/forms.html'
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