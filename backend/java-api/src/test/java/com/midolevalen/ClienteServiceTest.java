package com.midolcevalen;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class ClienteServiceTest {

    @Test
    void pruebaNombreCliente() {
        String nombre = "Dayan";
        assertEquals("Dayan", nombre);
    }
}