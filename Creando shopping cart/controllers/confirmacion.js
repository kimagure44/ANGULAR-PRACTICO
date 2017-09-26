app.controller("confirmacion",["$scope","carritoDeCompras", function($scope,carritoDeCompras) {
    $scope.total = carritoDeCompras.total;
    $scope.productos = carritoDeCompras.productos;
    
}]);