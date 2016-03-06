(function() {
'use strict';

    angular
        .module("nutritionApp")
        .controller('FoodLogController', FoodLogController);

    FoodLogController.$inject = [];
    function FoodLogController(){
        var vm = this;
        vm.foodsEaten = [
                {
                    name: "Tacos",
                    calories: 400
                },
                {
                    name: "hot dogs",
                    calories: 120.5
                },
                {
                    name: "Pie",
                    calories: 700
                },
                {
                    name: "apple",
                    calories: 87.3
                }
        ]; 
        
        ///////////////
        activate();
        
        function activate(){
            return vm.foodsEaten;
        }
    }
})();