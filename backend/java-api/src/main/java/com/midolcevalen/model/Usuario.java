package com.midolcevalen.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id

    @Column(name = "nombre_usu")
    private String nombre;
    
    @Column(name = "id_usuario")
    private Long id;

    @Column(name = "correo_usu")
    private String correo;

    @Column(name = "contra_usu")
    private String password;

    @Column(name = "tipo_usu")
    private int tipo;

    // 🔥 GETTERS Y SETTERS

    public Long getId() {
        return id;
    }

    public String getCorreo() {
        return correo;
    }

    public String getPassword() {
        return password;
    }

    public int getTipo() {
        return tipo;
    }

    public String getNombre() {
    return nombre;
    }
}