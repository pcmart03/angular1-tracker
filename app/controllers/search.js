(function() {
'use strict';

    angular
        .module('nutritionApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = [ '$state'];
    function SearchController($state) {
        var vm = this;
        vm.searchFoods = searchFoods;

        

        ////////////////

        function searchFoods(searchTerm) { 
           $state.go('search.results', {search_term: searchTerm} )
        }
    }
})();