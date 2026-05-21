package com.midolcevalen.service;

import com.midolcevalen.model.Producto;
import com.midolcevalen.repository.ProductoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    // LISTAR PRODUCTOS
    public List<Producto> listarProductos() {

        return productoRepository.findAll();
    }

    // GUARDAR PRODUCTO
    public Producto guardarProducto(Producto producto) {

        return productoRepository.save(producto);
    }

    // BUSCAR PRODUCTO POR ID
    public Optional<Producto> obtenerProducto(Long id) {

        return productoRepository.findById(id);
    }

    // ELIMINAR PRODUCTO
    public void eliminarProducto(Long id) {

        productoRepository.deleteById(id);
    }
}