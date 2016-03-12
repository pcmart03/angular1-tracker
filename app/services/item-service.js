(function() {
'use strict';

    angular
        .module('nutritionApp')
        .factory('ItemGetter', ItemGetter);

    ItemGetter.$inject = ['$http', '$log', 'SearchUrlService'];
    function ItemGetter($http, $log, SearchUrlService) {
        var services = {
            getItem:getItem
        };
        
        return services;

        ////////////////
        function getItem(itemId) {
           return $http.get(SearchUrlService.itemURL(itemId))
          .then(requestComplete)
          .catch(requestFailed);
         }
         
         function requestComplete(response) {
             var rFields = response.data;
             var fields = {
                 item_id: rFields.item_id,
                 item_name: rFields.item_name,
                 brand_name: rFields.brand_name,
                 calories: rFields.nf_calories,
                 date: setDate(),
                 serving_size_qty: rFields.nf_serving_size_qty,
                 serving_units: rFields.nf_serving_size_unit,
                 servings: 1
             };
             return fields;
         }
         
         function requestFailed(error){
             $log("failed to retrieve item: " + error);
         }
         
         function setDate(){
             var date = new Date();
             return date.toLocaleDateString();
         }
    }
})();