// routerHelperProvider.js

// Code for the provider taken from John Papa's style guide https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#routing

angular
    .module('nutritionApp')
    .provider('routerHelper', routerHelperProvider);

routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
/* @ngInject */
function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
    /* jshint validthis:true */
    this.$get = RouterHelper;

    $locationProvider.html5Mode(false);

    RouterHelper.$inject = ['$state'];
    /* @ngInject */
    function RouterHelper($state) {
        var hasOtherwise = true;

        var service = {
            configureStates: configureStates,
            getStates: getStates
        };

        return service;

        ///////////////

        function configureStates(states, otherwisePath) {
            states.forEach(function(state) {
                $stateProvider.state(state.state, state.config);
            });
            if (otherwisePath && !hasOtherwise) {
                hasOtherwise = true;
                $urlRouterProvider.otherwise(otherwisePath);
            }
        }

        function getStates() { return $state.get(); }
    }
}