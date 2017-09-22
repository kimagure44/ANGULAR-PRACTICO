app.controller("detalles",["$scope","$http","$routeParams","cfgGlobal", function($scope,$http,$routeParams,cfgGlobal) {
    debugger;
    $http.get(cfgGlobal.apiURL + "detalles.php", {
        params: { datoID: $routeParams.datoID }
    })
    .then(function(response){
        debugger;
        $scope.res = response.data[0];
    })
}]);