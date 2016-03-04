(function() {
'use strict';

    angular
        .module('nutritionApp')
        .factory('SearchService', SearchService);

    
    SearchService.$inject = ['$http', '$log','SearchUrlService'];
    function SearchService($http, $log, SearchUrlService) {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function searchRequest(searchTerm) { 
          return $http(SearchURLService.SearchURL(searchTerm))
          .then(searchComplete)
          .catch(searchFailed);
          
          function searchComplete(response){
              $log(response);
          }
          
          function searchFailed(error){
              $log('Search failed to return any results' + error);
          }
        }
    }
})();