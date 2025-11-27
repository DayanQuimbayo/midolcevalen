<?php
require '../database.php';

$query = $pdo->query("SELECT * FROM usuarios");
$usuarios = $query->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($usuarios);