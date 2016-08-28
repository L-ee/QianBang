'use strict';

function WelcomeCtrl($scope,$http){
    $http.get('http://www.runoob.com/try/angularjs/data/Customers_JSON.php')
        .then(function(response){
            $scope.username = response.data;
    });
}