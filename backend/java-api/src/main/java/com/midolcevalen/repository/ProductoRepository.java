package com.midolcevalen.repository;

import com.midolcevalen.model.Producto;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository
        extends JpaRepository<Producto, Long> {

}