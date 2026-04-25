package com.midolcevalen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.midolcevalen.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Usuario findByCorreoAndPassword(String correo, String password);
}