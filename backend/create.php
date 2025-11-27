<?php

require '../database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    

    $query = $pdo->prepare("INSERT INTO usuario (nombre, email, password) VALUES (?, ?, ?)");
    $query->execute([$nombre, $email, $password]);

    header("Location: ../../html/usuario.html?msg=Usuario+creado");
    exit;
}