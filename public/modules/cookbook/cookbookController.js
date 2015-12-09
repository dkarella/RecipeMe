angular.module('app').controller('cookbookController', ['$scope', '$http', '$location', '$compile', function($scope, $http, $location, $compile){
    $scope.recipe;
    $scope.recipes = [];
    $scope.allrecipes = [];

    $scope.recipeName = "";
    $scope.description = "";

    $scope.ingredients = [];
    $scope.finalIngredient = [];
    $scope.finalIngredient.push(0);
    $scope.ingredientList = [{
        name: "",
        unit: "",
        prep: ""
    }]

    $scope.steps = [];
    $scope.finalStep = [];
    $scope.finalStep.push(1);
    $scope.stepList = [{
        number: 1,
        text: ""
    }]

    $scope.servingSize;
    $scope.difficulty = "";
    $scope.hours;
    $scope.minutes;
    $scope.tags = "";
    $scope.actualTags = [];

    $scope.cookbook;

    $scope.fakePrivacy = "";
    $scope.privacy;

    $scope.$watch('fakePrivacy', function(){
        $scope.privacy = ($scope.fakePrivacy == "true")
    })
    $scope.$watch('tags', function() {
        $scope.actualTags = $scope.tags.split(", ");
    });

    $scope.dropdown = ["Italian Feast", "Weeknight Meals", "Quick Desserts"];
    $http.get('/api/recipes/').then(
            function(recipes){
                for(i = 0; i < recipes.data.length; i++){
                    if(recipes.data[i].saved){
                        $scope.recipes.push(recipes.data[i]);
                    }
                }
                console.log(recipes.data);
                console.log($scope.recipes);

                $scope.allrecipes = $scope.recipes;
            },
            function(){
                $location.url('/');
                $scope.message = "GET failed!";
            }
        );
    $scope.filter = function(value)
    {
        $scope.recipes = [];
        for(i = 0; i < $scope.allrecipes.length; i++)
        {
            if($scope.allrecipes[i].cookbook == $scope.dropdown[value])
            {
                $scope.recipes.push($scope.allrecipes[i]);
            }
        }
    };
    $scope.addRowSteps = function()
    {
        $scope.steps.push($scope.finalStep[0]);
        $scope.finalStep[0]++;
        $scope.stepList.push(
        {
            number: $scope.finalStep[0],
            text: ""
        });
    };
    $scope.removeRowSteps = function(value)
    {
        // console.log(value);
        for(i = value-1; i < $scope.steps.length; i++)
        {
            $scope.steps[i]--;
            $scope.stepList[i].number--;
        }
        $scope.stepList[$scope.stepList.length-1].number--;
        $scope.finalStep[0]--;
        $scope.steps.splice(value-1, 1);
        $scope.stepList.splice(value-1, 1);
    };
    $scope.addRow = function()
    {
        $scope.ingredients.push($scope.finalIngredient[0]);
        $scope.finalIngredient[0]++;
        $scope.ingredientList.push(
        {
            name: "",
            unit: "",
            prep: ""
        });
    };
    $scope.removeRow = function(value)
    {
        for(i = value; i < $scope.ingredients.length; i++)
        {
            $scope.ingredients[i]--;
        }
        $scope.finalIngredient[0]--;
        $scope.ingredients.splice(value, 1);
        $scope.ingredientList.splice(value, 1);
    };

    $scope.submit = function()
    {
        $scope.recipe = {
            name: $scope.recipeName,
            description: $scope.description,
            picture: "",
            servingSize: $scope.servingSize,
            difficulty: $scope.difficulty,
            hours: $scope.hours,
            minutes: $scope.minutes,
            saved: true,
            privacy: $scope.privacy,
            cookbook: $scope.cookbook,
            tags: $scope.actualTags,
            ingredients: $scope.ingredientList,
            steps: $scope.stepList
        }
        $http.post('/api/recipes/create', $scope.recipe).then(
            function(){
                $location.url('/');
            }
        );
    }

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
    $("#nextto6").click(function(){
        $('#modal5').modal('hide');
        $('#modal6').modal('show');
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
    $("#backto5").click(function(){
        $('#modal6').modal('hide');
        $('#modal5').modal('show');
    });
}]);

// var rowNum = 0;
// function addRow(frm) {
//     rowNum ++;
//     var row = '<p id="rowNum'+rowNum+'">' +
//         'Quantity: <input type="text" name="qty[]" size="5" value="'+frm.add_qty.value+'"> ' +
//         'Unit: <input type="text" name="add_units" size="5" /> ' +
//         'Ingredient: <input type="text" name="name[]" value="'+frm.add_name.value+'"> ' +
//         '<input class="btn btn-danger" type="button" value="Remove" onclick="removeRow('+rowNum+');"></p>';


//     jQuery('#itemRows').append(row);
//     frm.add_qty.value = '';
//     frm.add_name.value = '';
// }

// function removeRow(rnum) {
//     jQuery('#rowNum'+rnum).remove();
// }
