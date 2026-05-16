package com.midolcevalen.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.midolcevalen.model.Cliente;
import com.midolcevalen.repository.ClienteRepository;

@RestController
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    // LISTAR CLIENTES
    @GetMapping("/clientes")
    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    // GUARDAR CLIENTE
    @PostMapping("/clientes")
    public Cliente guardarCliente(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    // ELIMINAR CLIENTE
    @DeleteMapping("/clientes/{id}")
    public void eliminarCliente(@PathVariable Integer id) {
        clienteRepository.deleteById(id);
    }

    // ACTUALIZAR CLIENTE
    @PutMapping("/clientes/{id}")
    public Cliente actualizarCliente(
            @PathVariable Integer id,
            @RequestBody Cliente cliente) {

        cliente.setId_cliente(id);

        return clienteRepository.save(cliente);
    }
}