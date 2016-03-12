(function() {
'use strict';

    angular
        .module('nutritionApp')
        .service('DateService', DateService);

    DateService.$inject = [];
    function DateService() {
        this.setTodaysDate = setTodaysDate;
        
        ////////////////

         function setTodaysDate(){
             var date = new Date();
             return date.toLocaleDateString();
         }
    }
})();