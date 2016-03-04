(function() {
'use strict';

    angular
        .module('nutritionApp')
        .factory('SearchUrlService', SearchUrlService);

    SearchUrlService.$inject = ['config', '_'];
    function SearchUrlService(config, _) {
        var service = {
            generic: genericURLBuilder,
            searchURL: _.partial(genericURLBuilder, 'search'),
            itemURL: _.partial(genericURLBuilder, 'item')
        };
        
        return service;

        ////////////////
        function genericURLBuilder(requestType,requestTerm) { 
            var i,
                fieldsLength = config.nFields.length, url = config.nBaseURL + requestType + '/';
            url += config.searchTerm; 
            url += '?results=0:' + config.resultCount;
            url += '&fields=';
            for (i=0; i<fieldsLength; i++){
                if(i<fieldsLength-1){
                    url += config.nFields[i] + ',';
                } else {
                    url += config.nFields[i];
                }
            }
            url += '&APPID=' + config.nAppId;
            url += '&APPKEY=' + config.nAppKey;
            
            return url; 
        }
        
        
    }
})();