(function(){
    'use strict';
    var nutritionApp = angular.module('nutritionApp', ['ui.router', 'firebase']);
    
    nutritionApp.config(['$urlRouterProvider', function($urlRouterProivder){
      $urlRouterProivder.otherwise("/dashboard");  
    }])
})();