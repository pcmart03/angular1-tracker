(function() {
'use strict';

    angular
        .module("nutritionApp")
        .controller('FoodLogController', FoodLogController);

    FoodLogController.$inject = ['FirebaseData', '$log'];
    function FoodLogController(FirebaseData, $log){
        var vm = this;
        vm.foodsEaten = FirebaseData.savedArray(); 
        vm.deleteFood = deleteFood;
        ///////////////
        activate();
        
        function activate(){
            $log.log(vm.foodsEaten)
            return vm.foodsEaten;
        }
        
        function deleteFood(food){
            FirebaseData.deleteRecord(food);
        }
    }
})();