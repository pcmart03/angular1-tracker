(function() {
'use strict';

    angular
        .module("nutritionApp")
        .controller('FoodLogController', FoodLogController);

    FoodLogController.$inject = ['FirebaseData', '$log'];
    function FoodLogController(FirebaseData, $log){
        var vm = this;
        vm.foodsEaten = FirebaseData.savedArray();  
       
       
        // Methods
        vm.deleteFood = deleteFood;
        vm.editServings = editServings;
        vm.exitItem = exitItem;
        vm.updateFood = updateFood;
       
        ///////////////
        activate();
        
        function activate(){
            return vm.foodsEaten;
        }
        
        function deleteFood(food){
            FirebaseData.deleteRecord(food);
        }
        
        function toggleMode(item) {
            item.editMode = !item.editMode;
        }
        
        function editServings(item){
            toggleMode(item);
        }
        
        function updateFood(item, $event){
            var keyCode = event.which || event.keyCode;
            
            if(event.keyCode === 27) {
                vm.exitItem(item);
            }
            
            item.total_calories = item.calories * item.servings;
            
            if (event.keyCode === 13) {
                vm.exitItem(item);
                
                FirebaseData.updateRecord(item);
            }
        }
        
        function exitItem(item){
            if (item.editMode) {
                toggleMode(item);
            }
        }
    }
})();