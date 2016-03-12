(function() {
'use strict';

    angular
        .module('nutritionApp')
        .factory('FirebaseData', FirebaseData);

    Firebase.$inject = ['config', '$firebaseArray'];
    function FirebaseData(config, $firebaseArray) {
        var fbArray = $firebaseArray(new Firebase(config.firebaseURL));
        
        var service = {
            savedArray:savedArray,
            saveData:saveData,
            deleteRecord:deleteRecord,
            updateRecord:updateRecord
        };
        
        return service;

        ////////////////
        function savedArray() {
            return fbArray;
         }
         
         function saveData(data){
             fbArray.$add(data);
         }
         
         function deleteRecord(item){
             fbArray.$remove(item);
         }
         
         function updateRecord(item){
             fbArray.$save(item);
         }
    }
})();