(function() {
    'use strict';

    angular
        .module('nutritionApp')
        .directive('datePicker', datePicker);

    function datePicker() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;
        
        function link(scope, element) {
            element.datepicker({
                dateFormat: "m/dd/yy"
            });
        }
    }
})();