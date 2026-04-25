package com.midolcevalen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.midolcevalen.model.Cliente;
import com.midolcevalen.service.ClienteService;
import com.midolcevalen.repository.ClienteRepository;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private ClienteRepository clienteRepository;

    @PostMapping
    public Cliente guardarCliente(@RequestBody Cliente cliente) {
        return clienteService.guardar(cliente);
    }

    @GetMapping
    public List<Cliente> listarClientes() {
        return clienteService.listar();
    }

    @DeleteMapping("/clientes/{id}")
    public void eliminarCliente(@PathVariable Integer id) {
    clienteRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Cliente actualizarCliente(@PathVariable Integer id, @RequestBody Cliente cliente) {
    cliente.setIdCliente(id);
    return clienteRepository.save(cliente);
    }
}