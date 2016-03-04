(function() {
'use strict';

    angular
        .module('nutritionApp')
        .factory('SearchService', SearchService);

    
    SearchService.$inject = ['$http', '$log','SearchUrlService'];
    function SearchService($http, $log, SearchUrlService) {
        var service = {
            searchRequest:searchRequest
        };
        
        return service;

        ////////////////
        function searchRequest(searchTerm) { 
          return $http.get(SearchUrlService.searchURL(searchTerm))
          .then(searchComplete)
          .catch(searchFailed);
          
          function searchComplete(response){
              return response.data.hits;
          }
          
          function searchFailed(error){
              $log('Search failed to return any results' + error);
          }
        }
    }
})();