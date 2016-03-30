(function(){
    "use strict";
    angular
        .module('nutritionApp')
        .run(appRun);
        
    appRun.$inject = ['routerHelper'];    
    function appRun(routerHelper){
        routerHelper.configureStates(getStates());
    }
    
    function getStates() {
    return [
        {
            state: 'item',
            config: {
                templateUrl: '/app/templates/itemTemplate.html',
                url: '/item/:item_id',
                controller: 'ItemController',
                controllerAs: "item"
            }
        },
    ];
}
})();