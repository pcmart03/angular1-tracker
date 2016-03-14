(function(){
"use strict";
angular
    .module('nutritionApp')
    .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'index',
            config: {
                templateUrl: '/app/templates/home.html',
                url: '/dashboard',
                controller: 'FoodLogController',
                controllerAs: "foods"
            }
        },
        
    ];
}
})();


