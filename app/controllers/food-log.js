(function() {
'use strict';

    angular
        .module("nutritionApp")
        .controller('FoodLogController', FoodLogController);

    FoodLogController.$inject = ['FirebaseData', 'DateService', '$state', '$stateParams', '$log'];
    function FoodLogController(FirebaseData, DateService, $state, $stateParams, $log){
        var vm = this;
        vm.foodsEaten = FirebaseData.savedArray();  
       
       
        // Methods
        vm.deleteFood = deleteFood;
        vm.editServings = editServings;
        vm.exitItem = exitItem;
        vm.updateFood = updateFood;
        vm.setTodaysDate = setTodaysDate;
        vm.sumCalories = sumCalories;
       
        ///////////////
        activate();
        
        function activate(){
            vm.setTodaysDate();
            vm.sumCalories();
        }
        
        function deleteFood(food){
            FirebaseData.deleteRecord(food);
            vm.sumCalories();
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
       
       function setTodaysDate(){
            vm.viewDate = DateService.setTodaysDate();
        }
        
      function sumCalories(){
          var total = 0;
          vm.foodsEaten.$loaded().then(function(foodsEaten){
              for (var i = 0; i < vm.foodsEaten.length; i++) {
                if (foodsEaten[i].date === vm.viewDate){
                    total += foodsEaten[i].total_calories;
              }
          }
          vm.calorieTotal = total;
          })

      }
    }
})();