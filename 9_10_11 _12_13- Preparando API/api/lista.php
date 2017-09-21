<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: X-Requested-With");
    header("Content-Type: text/html; charset=utf-8");

    $conexion = mysqli_connect("localhost","ayukawa","zbc412ml","angularpractico");

    if (mysqli_connect_errno($conexion)) {
        echo "Error conexion base datos: " . mysqli_connect_error();
    }

    $conexion->set_charset("utf8");


    $result = mysqli_query($conexion, "SELECT * FROM lista_empleados");

    $resultado = array();

    while($row = mysqli_fetch_array($result)) {
        
        $objeto = array();
        $objeto["id"] = $row["id"];
        $objeto["nombre"] = $row["nombre"];
        $objeto["descripcion"] = $row["descripcion"];
        $objeto["fecha"] = $row["fecha"];
        
        array_push($resultado, $objeto);
    }

    echo json_encode($resultado, JSON_UNESCAPED_UNICODE);
?>