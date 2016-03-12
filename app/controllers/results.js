(function() {
'use strict';

    angular
        .module('nutritionApp')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['SearchService', '$state', '$stateParams', 'DateService'];
    function ResultsController(SearchService, $state, $stateParams, DateService) {
        var vm = this;
        vm.getHits = getHits;
        
        activate();

        ////////////////

        function activate() {
            vm.getHits($stateParams.search_term);
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
            
        }
    }      
})();