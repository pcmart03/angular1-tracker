(function() {
    'use strict';

    angular
        .module('nutritionApp')
        .directive('focusShow', focusShow);

    focusShow.$inject = ['$timeout'];
    function focusShow($timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attr) {
            scope.$watch(attr.ngShow,function(_focusVal) {
                $timeout(function() {
                    _focusVal ? element.focus() :
                        element[0].blur();
                });
             });
        }
    }
})();