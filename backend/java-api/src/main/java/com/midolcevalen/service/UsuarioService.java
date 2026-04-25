package com.midolcevalen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.midolcevalen.model.Usuario;
import com.midolcevalen.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario login(String correo, String password) {

        Usuario usuario = usuarioRepository.findByCorreoAndPassword(correo, password);

        if (usuario != null && usuario.getPassword().equals(password)) {
            return usuario;
        }

        return null;
    }
}