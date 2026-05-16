package com.midolcevalen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.midolcevalen.dto.LoginRequest;
import com.midolcevalen.model.Usuario;
import com.midolcevalen.repository.UsuarioRepository;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest login) {

    Usuario usuario = usuarioService.login(
            login.getCorreo(),
            login.getPassword()
    );

    if (usuario == null) {

        return ResponseEntity
                .status(401)
                .body("Credenciales incorrectas");

    }

    return ResponseEntity.ok(usuario);
    }
}