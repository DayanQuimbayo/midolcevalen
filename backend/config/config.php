<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "mi_dolce_valen";

$conexion = new mysqli($host, $user, $password, $database);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

return [
    'DB_HOST' => $host,
    'DB_NAME' => $database,
    'DB_USER' => $user,
    'DB_PASS' => $password
];