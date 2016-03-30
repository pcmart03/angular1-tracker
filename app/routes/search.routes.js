(function(){
    "use strict";
    angular
    .module('nutritionApp')
    .run(appRun);

/* @ngInject */
appRun.$inject = ['routerHelper'];
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'search',
            config: {
                templateUrl: '/app/templates/searchTemplate.html',
                url: '/search',
                controller: 'SearchController',
                controllerAs: "search"
            }
        },
        {
            state: 'search.results',
            config: {
                url: '/:search_term',
                templateUrl: '/app/templates/resultsTemplate.html',
                controller: "ResultsController",
                controllerAs: "results"
            }
        }
    ];
}
})();