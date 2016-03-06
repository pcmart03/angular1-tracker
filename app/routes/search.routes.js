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
            state: 'search',
            config: {
                templateUrl: '/app/templates/searchTemplate.html',
                url: '/search'
            }
        }
    ];
}