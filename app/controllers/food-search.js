(function() {
'use strict';

    angular
        .module('nutritionApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['SearchService'];
    function SearchController() {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();