(function() {
'use strict';

    angular
        .module('nutritionApp')
        .factory('_', _);

    _.$inject = ['$window'];
    function Service($window) {
        var _ = $window._;
        
        delete $window._;
        
        return _;

    }
})();