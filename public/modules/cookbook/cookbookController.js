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

var rowNum = 0;
function addRow(frm) {
    rowNum++;
    var row = '<p id="rowNum'+rowNum+'">Item quantity: <input type="text" name="qty[]" size="4" value="'+frm.add_qty.value+'"> Item name: <input type="text" name="name[]" value="'+frm.add_name.value+'"> <input type="button" value="Remove" onclick="rowRow('+rowNum+');"></p>';
    jQuery('#itemRows').append(row);
    frm.add_qty.value = '';
    frm.add_name.value = '';
}

function removeRow(rnum) {
    jQuery('#rowNum'+rnum).remove();
}
