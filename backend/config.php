<?php

$config = include 'config.php';

$host = $config['DB_HOST'];
$bd   = $config['DB_NAME'];
$user = $config['DB_USER'];
$pass = $config['DB_PASS'];

$conexion = new mysqli($host, $user, $pass, $bd);

if ($conexion->connect_error) {
    die("❌ Error de conexión: " . $conexion->connect_error);
}

// echo "✔ Conexión exitosa."; // activarlo solo para pruebas
?>