package com.midolcevalen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.midolcevalen.dto.LoginRequest;
import com.midolcevalen.model.Usuario;
import com.midolcevalen.service.UsuarioService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        Usuario usuario = usuarioService.login(
            request.getCorreo(),
            request.getPassword()
        );

        if (usuario != null) {
            return ResponseEntity.ok(usuario);
        }

        return ResponseEntity.status(401).body("Credenciales incorrectas");
    }
}