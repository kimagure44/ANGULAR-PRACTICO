app.controller("inicio",["$scope","$location","carritoDeCompras", function($scope, $location, carritoDeCompras){
    
    $scope.productos = [
        {
            id:1,
            nombre: "Producto 1",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi, aliquam reiciendis dolorum voluptatibus ab blanditiis, velit maxime mollitia sit. Sequi id ab, consequatur praesentium accusamus recusandae in placeat reprehenderit.",
            precio: 10,
            imagen: "producto.png"
        },
        {
            id:2,
            nombre: "Producto 2",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi, aliquam reiciendis dolorum voluptatibus ab blanditiis, velit maxime mollitia sit. Sequi id ab, consequatur praesentium accusamus recusandae in placeat reprehenderit.",
            precio: 10,
            imagen: "producto.png"
        },
        {
            id:3,
            nombre: "Producto 3",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi, aliquam reiciendis dolorum voluptatibus ab blanditiis, velit maxime mollitia sit. Sequi id ab, consequatur praesentium accusamus recusandae in placeat reprehenderit.",
            precio: 10,
            imagen: "producto.png"
        },
        {
            id:4,
            nombre: "Producto 4",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi, aliquam reiciendis dolorum voluptatibus ab blanditiis, velit maxime mollitia sit. Sequi id ab, consequatur praesentium accusamus recusandae in placeat reprehenderit.",
            precio: 10,
            imagen: "producto.png"
        },
        {
            id:5,
            nombre: "Producto 5",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi, aliquam reiciendis dolorum voluptatibus ab blanditiis, velit maxime mollitia sit. Sequi id ab, consequatur praesentium accusamus recusandae in placeat reprehenderit.",
            precio: 10,
            imagen: "producto.png"
        },
        {
            id:6,
            nombre: "Producto 6",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi, aliquam reiciendis dolorum voluptatibus ab blanditiis, velit maxime mollitia sit. Sequi id ab, consequatur praesentium accusamus recusandae in placeat reprehenderit.",
            precio: 10,
            imagen: "producto.png"
        },
        {
            id:7,
            nombre: "Producto 7",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi, aliquam reiciendis dolorum voluptatibus ab blanditiis, velit maxime mollitia sit. Sequi id ab, consequatur praesentium accusamus recusandae in placeat reprehenderit.",
            precio: 10,
            imagen: "producto.png"
        }
    ];
    $scope.carrito = [];
    $scope.comprar = function(_item) {
        _item.ocultar = true;
        $scope.carrito.push(_item);
        carritoDeCompras.productos = $scope.carrito;
    }
    $scope.total = function() {
        var total = 0;
        for (item of $scope.carrito) {
            total += item.precio;
        }
        carritoDeCompras.total = total;
        return total;
    }
    $scope.finalizar = function() {
        $location.path("/confirmacion");
    }
    
}]);