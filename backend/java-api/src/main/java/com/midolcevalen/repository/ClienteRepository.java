package com.midolcevalen.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.midolcevalen.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}