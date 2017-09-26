app.controller("navegacionController",["$scope","$location","cfgGlobal", function($scope, $location, cfgGlobal){
    $scope.config = cfgGlobal.siteName;
    $scope.activo = function(rutaActual) {
        return rutaActual === $location.path();
    };
}]);