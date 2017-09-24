app.controller("inicio",["$scope","$http","$location","cfgGlobal", function($scope,$http,$location,cfgGlobal){
    $scope.config = cfgGlobal;
    $scope.verDetalles = function(datos) {
        $location.path("/detalles/" + datos.id);
    }
    $http.get($scope.config.apiURL + "lista.php").then(function(response){
       $scope.datosPersonales = response.data;
    });
        
}]);