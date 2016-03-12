(function() {
'use strict';

    angular
        .module('nutritionApp')
        .controller('ItemController', ItemController);

    ItemController.$inject = ['ItemGetter', '$state', '$stateParams', '$log', 'FirebaseData'];
    function ItemController(ItemGetter, $state, $stateParam, $log, FirebaseData) {
        var vm = this;
        vm.getItem = getItem;
        vm.updateServings = updateServings;
        vm.calculateCalories = calculateCalories;
        vm.saveFood = saveFood;
        activate();

        ////////////////

        function activate() { 
            return getItem($stateParam.item_id);
        }
        
        function getItem(itemID){
            return ItemGetter.getItem(itemID)
                .then(function(data){
                  vm.fields = data;
                  vm.calculateCalories();
                  
                  return vm.fields; 
                });
        }
        
        function updateServings(value){
            vm.fields.servings = value;
            vm.calculateCalories();
        }
        
        function calculateCalories(){
            vm.fields.total_calories = vm.fields.servings * vm.fields.calories;
        }
        
        function saveFood(){
            vm.editMode = true;
            FirebaseData.saveData(vm.fields);
            $state.go('index');
        }
    }
})();