(function() {
'use strict';

    angular
        .module('nutritionApp')
        .factory('SearchUrlService', SearchUrlService);

    SearchUrlService.$inject = ['config'];
    function SearchUrlService(config) {
        var service = {
            URLBuilder:URLBuilder
        };
        
        return service;

        ////////////////
        function URLBuilder(config) { 
            
        }
    }
})();