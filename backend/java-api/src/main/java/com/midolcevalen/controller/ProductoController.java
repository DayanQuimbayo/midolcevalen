package com.midolcevalen.controller;

import com.midolcevalen.model.Producto;
import com.midolcevalen.service.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

@CrossOrigin(origins = "http://localhost:5173")

public class ProductoController {

    @Autowired
    private ProductoService productoService;

    // LISTAR PRODUCTOS
    @GetMapping("/productos")
    public List<Producto> listarProductos() {

        return productoService.listarProductos();
    }

    // GUARDAR PRODUCTO
    @PostMapping("/productos")
    public Producto guardarProducto(
            @RequestBody Producto producto) {

        return productoService.guardarProducto(producto);
    }

    // BUSCAR PRODUCTO POR ID
    @GetMapping("/productos/{id}")
    public Optional<Producto> obtenerProducto(
            @PathVariable Long id) {

        return productoService.obtenerProducto(id);
    }

    // ELIMINAR PRODUCTO
    @DeleteMapping("/productos/{id}")
    public void eliminarProducto(
            @PathVariable Long id) {

        productoService.eliminarProducto(id);
    }

     // ACTUALIZAR PRODUCTO
    @PutMapping("/productos/{id}")
    public Producto actualizarProducto(
            @PathVariable Long id,
            @RequestBody Producto producto) {

        return productoService.actualizarProducto(
                id,
                producto);
    }
}

   