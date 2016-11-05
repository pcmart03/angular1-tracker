function routerHelperProvider(e,t,r){function n(e){function n(e,n){e.forEach(function(e){t.state(e.state,e.config)}),n&&!o&&(o=!0,r.otherwise(n))}function i(){return e.get()}var o=!0,a={configureStates:n,getStates:i};return a}this.$get=n,e.html5Mode(!1),n.$inject=["$state"]}!function(){"use strict";var e=angular.module("nutritionApp",["ui.router","firebase"]);e.config(["$urlRouterProvider",function(e){e.otherwise("/dashboard")}])}(),angular.module("nutritionApp").provider("routerHelper",routerHelperProvider),routerHelperProvider.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"],function(){"use strict";angular.module("nutritionApp").constant("config",{nBaseURL:"https://api.nutritionix.com/v1_1/",nAppID:"de86943f",nAppKey:"7c49c265a4450f1c80b004885aeee028",resultCount:"50",nFields:["item_name","item_id","brand_name","nf_calories"],firebaseURL:"https://ng1-nutrition-app.firebaseio.com/"})}(),function(){"use strict";function e(e){function t(t){return function(r){var n,i=e.nFields.length,o=e.nBaseURL+t+"/";if("item"===t&&(o+="?id="),o+=r,"search"===t)for(o+="?results=0:"+e.resultCount,o+="&fields=",n=0;i>n;n++)o+=i-1>n?e.nFields[n]+",":e.nFields[n];return o+="&appId="+e.nAppID,o+="&appKey="+e.nAppKey}}var r={searchURL:t("search"),itemURL:t("item")};return r}angular.module("nutritionApp").factory("SearchUrlService",e),e.$inject=["config"]}(),function(){"use strict";function e(e,t,r){function n(n){function i(e){return e.data.hits}function o(e){t("Search failed to return any results"+e)}return e.get(r.searchURL(n)).then(i)["catch"](o)}var i={searchRequest:n};return i}angular.module("nutritionApp").factory("SearchService",e),e.$inject=["$http","$log","SearchUrlService"]}(),function(){"use strict";function e(e,t,r,n){function i(t){return e.get(r.itemURL(t)).then(o)["catch"](a)}function o(e){var t=e.data,r={item_id:t.item_id,item_name:t.item_name,brand_name:t.brand_name,calories:t.nf_calories,date:n.setTodaysDate(),serving_size_qty:t.nf_serving_size_qty,serving_units:t.nf_serving_size_unit,servings:1};return r}function a(e){t("failed to retrieve item: "+e)}var u={getItem:i};return u}angular.module("nutritionApp").factory("ItemGetter",e),e.$inject=["$http","$log","SearchUrlService","DateService"]}(),function(){"use strict";function e(e,t){function r(){return a}function n(e){a.$add(e)}function i(e){a.$remove(e)}function o(e){a.$save(e)}var a=t(new Firebase(e.firebaseURL)),u={savedArray:r,saveData:n,deleteRecord:i,updateRecord:o};return u}angular.module("nutritionApp").factory("FirebaseData",e),e.$inject=["config","$firebaseArray"]}(),function(){"use strict";function e(){function e(e){var t=Array.prototype.slice.call(arguments,1);switch(e){case"multiply":return t.reduce(function(e,t){return e*t});case"add":return t.reduce(function(e,t){return e+t});case"subtract":return t.reduce(function(e,t){return e-t});case"divide":return t.reduce(function(e,t){return e/t})}}var t={calc:e};return t}angular.module("nutritionApp").factory("CalcService",e),e.$inject=[]}(),function(){"use strict";function e(){function e(){var e=new Date;return e.toLocaleDateString()}this.setTodaysDate=e}angular.module("nutritionApp").service("DateService",e),e.$inject=[]}(),function(){"use strict";function e(e,t,r,n,i){function o(){p.setTodaysDate(),p.sumCalories()}function a(t){e.deleteRecord(t),p.sumCalories()}function u(e){e.editMode=!e.editMode}function c(e){u(e)}function s(t,r){event.which||event.keyCode;27===event.keyCode&&p.exitItem(t),t.total_calories=t.calories*t.servings,13===event.keyCode&&(p.exitItem(t),e.updateRecord(t))}function l(e){e.editMode&&u(e)}function f(){p.viewDate=t.setTodaysDate()}function d(){var e=0;p.foodsEaten.$loaded().then(function(t){for(var r=0;r<p.foodsEaten.length;r++)t[r].date===p.viewDate&&(e+=t[r].total_calories);p.calorieTotal=e})}var p=this;p.foodsEaten=e.savedArray(),p.deleteFood=a,p.editServings=c,p.exitItem=l,p.updateFood=s,p.setTodaysDate=f,p.sumCalories=d,o()}angular.module("nutritionApp").controller("FoodLogController",e),e.$inject=["FirebaseData","DateService","$state","$stateParams","$log"]}(),function(){"use strict";function e(e){function t(t){e.go("search.results",{search_term:t})}var r=this;r.searchFoods=t}angular.module("nutritionApp").controller("SearchController",e),e.$inject=["$state"]}(),function(){"use strict";function e(e,t,r,n){function i(){a.getHits(r.search_term)}function o(t){return t?e.searchRequest(t).then(function(e){a.hits=e}):void(a.hits="")}var a=this;a.getHits=o,i()}angular.module("nutritionApp").controller("ResultsController",e),e.$inject=["SearchService","$state","$stateParams","DateService"]}(),function(){"use strict";function e(e,t,r,n,i){function o(){return a(r.item_id)}function a(t){return e.getItem(t).then(function(e){return l.fields=e,l.calculateCalories(),l.fields})}function u(e){l.fields.servings=e,l.calculateCalories()}function c(){l.fields.total_calories=l.fields.servings*l.fields.calories}function s(){l.editMode=!0,i.saveData(l.fields),t.go("index")}var l=this;l.getItem=a,l.updateServings=u,l.calculateCalories=c,l.saveFood=s,o()}angular.module("nutritionApp").controller("ItemController",e),e.$inject=["ItemGetter","$state","$stateParams","$log","FirebaseData"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"index",config:{templateUrl:"/app/templates/home.html",url:"/dashboard",controller:"FoodLogController",controllerAs:"foods"}}]}angular.module("nutritionApp").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"search",config:{templateUrl:"/app/templates/searchTemplate.html",url:"/search",controller:"SearchController",controllerAs:"search"}},{state:"search.results",config:{url:"/:search_term",templateUrl:"/app/templates/resultsTemplate.html",controller:"ResultsController",controllerAs:"results"}}]}angular.module("nutritionApp").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"item",config:{templateUrl:"/app/templates/itemTemplate.html",url:"/item/:item_id",controller:"ItemController",controllerAs:"item"}}]}angular.module("nutritionApp").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){function t(t,r,n){t.$watch(n.ngShow,function(t){e(function(){t?r.focus():r[0].blur()})})}var r={link:t,restrict:"A"};return r}angular.module("nutritionApp").directive("focusShow",e),e.$inject=["$timeout"]}(),function(){"use strict";function e(){function e(e,t){t.datepicker({dateFormat:"m/dd/yy"})}var t={link:e,restrict:"A"};return t}angular.module("nutritionApp").directive("datePicker",e)}();