package com.midolcevalen.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Clase de conexión a la base de datos usando JDBC
 */
public class ConexionBD {

    private static final String URL = "jdbc:mysql://localhost:3306/midolcevalen";
    private static final String USER = "root";
    private static final String PASSWORD = "";

    public static Connection conectar() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}