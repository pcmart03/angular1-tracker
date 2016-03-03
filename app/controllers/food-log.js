angular.
    module('nutritionApp').controller('FoodLogController', ['$scope', function($scope){
    $scope.foodsEaten = {
        foods: [
            {
                name: "Tacos",
                calories: 400
            },
            {
                name: "hot dogs",
                calories: 120.5
            },
            {
                name: "Pie",
                calories: 700
            },
            {
                name: "apple",
                calories: 87.3
            }
        ]
    };
}]);
