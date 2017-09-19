app.controller("navegacionController",["$scope","$location","cfgGlobal", function($scope, $location, cfgGlobal){
    debugger;
    $scope.config = cfgGlobal.siteName;
    $scope.activo = function(rutaActual) {
        debugger;
        return rutaActual === $location.path();
    };
}]);