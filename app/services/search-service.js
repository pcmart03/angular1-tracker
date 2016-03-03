(function() {
'use strict';

    angular
        .module('nutritionApp')
        .factory('SearchService', SearchService);

    
    SearchService.$inject = ['$http'];
    function SearchService($http) {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();