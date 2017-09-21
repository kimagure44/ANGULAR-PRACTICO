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

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $id = $request->id;
    $nombre = $request->mombre;
    $descripcion = $request->descripcion;
    $fecha = $request->fecha;

    $result = mysqli_query($conexion, "UPDATE lista_empleados SET nombre='$nombre', descripcion='.$descripcion',fecha='$fecha' WHERE id=$id");
    echo '{"response":"ok"}';
?>