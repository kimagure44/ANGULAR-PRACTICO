var app = angular.module("navegacion", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "plantillas/inicio.html",
        controller: "inicio"
    })
    .when("/inicio", {
        templateUrl : "plantillas/inicio.html",
        controller: "inicio"
    })
    .when("/contacto", {
        templateUrl : "plantillas/contacto.html",
        controller: "inicio"
    })
    .when("/galeria", {
        templateUrl : "plantillas/galeria.html",
        controller: "inicio"
    })
    .when("/mapa", {
        templateUrl : "plantillas/mapa.html",
        controller: "inicio"
    })
    .when("/404", {
        templateUrl: "plantillas/404.html",
        controller: "inicio"
    })
    .otherwise({
        redirectTo: "/404",
        controller: "inicio",
    });
});