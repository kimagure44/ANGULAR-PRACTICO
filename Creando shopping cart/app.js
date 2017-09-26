var app = angular.module("navegacion", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "plantillas/inicio.html",
        controller: "inicio"
    })
    .when("/404", {
        templateUrl: "plantillas/404.html",
        controller: "inicio"
    })
    .when("/confirmacion", {
        templateUrl: "plantillas/confirmacion.html",
        controller: "confirmacion"
    })
    .otherwise({
        redirectTo: "/404",
        controller: "inicio"
    });
});

app.constant("cfgGlobal",{
    "siteName":"Titulo aplicación WEB",
});