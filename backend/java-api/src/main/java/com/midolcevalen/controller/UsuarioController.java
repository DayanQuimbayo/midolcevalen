package com.midolcevalen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.midolcevalen.model.Usuario;
import com.midolcevalen.service.UsuarioService;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public Usuario login(@RequestBody Usuario usuario) {
        return usuarioService.login(usuario.getCorreo(), usuario.getPassword());
    }
}