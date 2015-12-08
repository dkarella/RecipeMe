angular.module('app').controller('cookbookController', ['$scope', '$http', '$location', '$compile', function($scope, $http, $location, $compile){
    //$scope.recipes = [];
    //$scope.item = 1;
    //var item = 1;
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
    //$scope.addIngredient = function(){
    //    $('#ingredientRows .last input[type="button"]').attr('ng-click', 'removeIngredient(this)');
    //    var $el1 = $('#ingredientRows .last input[type="button"]').val('-');
    //    $('#ingredientRows .last').removeClass('last');
    //    $scope.item++;
    //    var $el2  = $('#ingredientRows').append('<div class="row last" id="ingredientRow{{item}}"> Ingredient quantity: <input type="text" size="4" ng-model="ingredientQty"/> \
    //        Ingredient name: <input type="text" ng-model="ingredientName"/> \
    //        <input ng-click="addIngredient()" type="button" value="+" /> </div>');
    //
    //    $compile($el1)($scope);
    //    $compile($el2)($scope);
    //};
    //
    //$scope.removeIngredient = function(ingredient){
    //    console.log($(ingredient));
    //    $(ingredient).parent().remove();
    //}
}]);

//var rowNum = 0;
//function addRow(frm) {
//    rowNum++;
//    var row = '<p id="rowNum'+rowNum+'">Item quantity: <input type="text" name="qty[]" size="4" value="'+frm.add_qty.value+'"> Item name: <input type="text" name="name[]" value="'+frm.add_name.value+'"> <input type="button" value="Remove" onclick="rowRow('+rowNum+');"></p>';
//    jQuery('#itemRows').append(row);
//    frm.add_qty.value = '';
//    frm.add_name.value = '';
//}
//
//function removeRow(rnum) {
//    jQuery('#rowNum'+rnum).remove();
//}

$(function()
{
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var controlForm = $('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e)
    {
        $(this).parents('.entry:first').remove();

        e.preventDefault();
        return false;
    });
});

