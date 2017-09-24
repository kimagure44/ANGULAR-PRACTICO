app.controller("detalles",["$scope","$http","$routeParams","$location","cfgGlobal", function($scope,$http,$routeParams,$location,cfgGlobal) {
    $http.get(cfgGlobal.apiURL + "detalles.php", {
        params: { datoID: $routeParams.datoID }
    })
    .then(function(response){
        $scope.res = response.data[0];
    })
    
    $scope.save = function() {
        $http({
            url: cfgGlobal.apiURL + "guardar.php",
            method: "POST",
            data: $scope.res,
            headers: {"Content-Type":"application/x-www-form-urlencoded"}
        })
        .then(function(response){
            if (response.data.response == "ok")
                $location.path("/")
            else
                alertify.alert('Error guardando');
        })
    }
}]);