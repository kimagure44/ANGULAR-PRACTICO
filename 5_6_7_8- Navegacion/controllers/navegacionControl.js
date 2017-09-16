app.controller("navegacionController",["$scope","$location", function($scope, $location){
    $scope.activo = function(rutaActual) {
        debugger;
        return rutaActual === $location.path();
    };
}]);