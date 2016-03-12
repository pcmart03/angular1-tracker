(function() {
'use strict';

    angular
        .module('nutritionApp')
        .factory('CalcService', CalcService);

    CalcService.$inject = [];
    function CalcService() {
        var service = {
            calc:calc,
        };
        
        return service;

        ////////////////
        function calc(operator) { 
            var args = Array.prototype.slice.call(arguments, 1);
            switch(operator) {
                case 'multiply':
                    return args.reduce(function(a, b){
                        return a * b;
                    });
                case 'add':
                   return args.reduce(function(a, b){
                        return a + b;
                   });
               case 'subtract':
                   return args.reduce(function(a, b){
                        return a - b;
                   });
               case 'divide':
                   return args.reduce(function(a, b){
                        return a / b;
                   });                 
            }
            
        }
        
        function sum(numbers){
            
        }
    }
})();