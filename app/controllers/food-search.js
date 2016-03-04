(function() {
'use strict';

    angular
        .module('nutritionApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['SearchService', '$log'];
    function SearchController(SearchService, $log) {
        var vm = this;
        vm.results = [];
        vm.searchFoods = searchFoods;

        

        ////////////////

        function searchFoods(searchTerm) { 
           return SearchService.searchRequest(searchTerm)
                .then(function(data){
                    vm.results = data
                    return vm.results
                });
        }
    }
})();