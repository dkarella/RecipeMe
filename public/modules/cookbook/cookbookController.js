angular.module('app').controller('cookbookController', ['$scope', '$http', '$location', '$compile', function($scope, $http, $location, $compile){
    $scope.recipes = [];
    $scope.allrecipes = [];
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

var rowNum = 0;
function addRow(frm) {
    rowNum++;
    var row = '<p id="rowNum'+rowNum+'">' +
        'Quantity: <input type="text" name="qty[]" size="5" value="'+frm.add_qty.value+'"> ' +
        'Unit: <input type="text" name="add_units" size="5" /> ' +
        'Ingredient: <input type="text" name="name[]" value="'+frm.add_name.value+'"> ' +
        '<input class="btn btn-danger" type="button" value="Remove" onclick="removeRow('+rowNum+');"></p>';

    jQuery('#itemRows').append(row);
    frm.add_qty.value = '';
    frm.add_name.value = '';
}

function removeRow(rnum) {
    jQuery('#rowNum'+rnum).remove();
}
