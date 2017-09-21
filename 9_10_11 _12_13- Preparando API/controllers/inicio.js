app.controller("inicio",["$scope","$http","cfgGlobal", function($scope,$http,cfgGlobal){
    $scope.config = cfgGlobal;
    $scope.verDetalles = function(datos) {
        console.log(datos);
    }
    $http.get($scope.config.apiURL + "lista.php").then(function(response){
       $scope.datosPersonales = response.data;
    });
        
}]);