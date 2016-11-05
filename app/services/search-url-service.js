(function() {
    'use strict';

    angular
        .module('nutritionApp')
        .factory('SearchUrlService', SearchUrlService);

    SearchUrlService.$inject = ['config'];

    function SearchUrlService(config) {
        var service = {
            searchURL: URLBuilder('search'),
            itemURL: URLBuilder('item')
        };

        return service;

        ////////////////
        function URLBuilder(requestType) {
            /*
             * This function builds the request url. The request type indicates which nutrionix api to call.
             * It returns a function that accepts a search term as a parameter.
             */
            return function(requestTerm) {
                var i,
                    fieldsLength = config.nFields.length,
                    url = config.nBaseURL + requestType + '/';
                if (requestType === 'item') {
                    url += '?id=';
                }

                url += requestTerm;
                // add results and required fields for search.
                if (requestType === 'search') {
                    url += '?results=0:' + config.resultCount;
                    url += '&fields=';
                    for (i = 0; i < fieldsLength; i++) {
                        if (i < fieldsLength - 1) {
                            url += config.nFields[i] + ',';
                        } else {
                            url += config.nFields[i];
                        }
                    } //end for
                } //end if

                url += '&appId=' + config.nAppID;
                url += '&appKey=' + config.nAppKey;

                return url;
            }
        }

    }
})();