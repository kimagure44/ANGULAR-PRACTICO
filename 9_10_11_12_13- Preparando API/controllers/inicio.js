app.controller("inicio",["$scope","$http","$location","cfgGlobal", function($scope,$http,$location,cfgGlobal){
    $scope.config = cfgGlobal;
    $scope.verDetalles = function(datos) {
        debugger;
        $location.path("/detalles");
    }
    $http.get($scope.config.apiURL + "lista.php").then(function(response){
       $scope.datosPersonales = response.data;
    });
        
}]);