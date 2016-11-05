/* Enter your nutritionix app id and app key, and the url to your firebase database.
 * Then save the file as "constants.js"
 */
(function(){
    "use strict";
    angular
        .module('nutritionApp')
        .constant('config', { 
            'nBaseURL': 'https://api.nutritionix.com/v1_1/',
            'nAppID': 'NUTRIONIX_APP_ID',
            'nAppKey': 'NUTRIONIX_APP_KEY',
            'resultCount': '50',
            'nFields': [
                'item_name',
                'item_id',
                'brand_name',
                'nf_calories'
            ],
            'firebaseURL': 'FIREBASE_URL'
            });
})();