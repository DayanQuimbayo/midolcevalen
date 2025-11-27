<?php

// Mostrar errores (solo para pruebas)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Verificar que los datos llegaron
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    die("Error: solo se permite el método POST");
}

if (!isset($_POST["id_usuario"], $_POST["nombre"], $_POST["email"], $_POST["password"])) {
    die("Error: faltan datos del formulario");
}

// Recibir datos
$id_usuario = trim($_POST["id_usuario"]);
$nombre = trim($_POST["nombre"]);
$email = trim($_POST["email"]);
$password = trim($_POST["password"]);

// Validar vacíos
if ($id_usuario === "" || $nombre === "" || $email === "" || $password === "") {
    die("Error: ningún campo puede estar vacío");
}

// Conexión
$conexion = new mysqli("localhost", "root", "", "mi_dolce_valen");

// Verificar conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Insertar datos — se omite id_usuario porque es AUTO_INCREMENT
$sql = "INSERT INTO usuario (id_usuario, nombre_usu, correo_usu, contra_usu)
        VALUES (?, ?, ?, ?)";

$stmt = $conexion->prepare($sql);

if (!$stmt) {
    die("Error en prepare: " . $conexion->error);
}

$stmt->bind_param("isss", $id_usuario, $nombre, $email, $password);

if ($stmt->execute()) {
    echo "<h2>Usuario registrado correctamente</h2>";
} else {
    echo "Error al insertar: " . $stmt->error;
}

$stmt->close();
$conexion->close();

?>