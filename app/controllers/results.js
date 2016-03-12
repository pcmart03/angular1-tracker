(function() {
'use strict';

    angular
        .module('nutritionApp')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['SearchService', '$state', '$stateParams'];
    function ResultsController(SearchService, $state, $stateParams) {
        var vm = this;
        vm.getHits = getHits;

        activate();

        ////////////////

        function activate() {
            return vm.getHits($stateParams.search_term);
         }
        
        function getHits(searchTerm) {
            if(searchTerm) {
                return SearchService.searchRequest(searchTerm)
                .then(function(data){
                    vm.hits = data;
                });
            } else {
                vm.hits = "";
            }
            return vm.hits;
        }
    }
})();