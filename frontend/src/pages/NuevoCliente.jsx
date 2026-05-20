import { useState } from "react";
import { crearCliente } from "../servicios/clienteService";
import Layout from "../components/Layout";

import { useNavigate } from "react-router-dom";


function NuevoCliente() {

  const navigate = useNavigate();

  // 🔹 ESTADO DEL FORMULARIO
  const [cliente, setCliente] = useState({
    id_cliente: "",
    nombre: "",
    correo: "",
    celular: "",
    direccion: ""
  });

  // 🔹 CAMBIOS EN INPUTS
  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 GUARDAR CLIENTE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const clienteEnviar = {
        id_cliente: parseInt(cliente.id_cliente),
        nombre: cliente.nombre,
        correo: cliente.correo,
        celular: cliente.celular,
        direccion: cliente.direccion
      };

      console.log("ENVIANDO:", clienteEnviar);

      await crearCliente(clienteEnviar);

      alert("Cliente guardado correctamente ✅");

      // LIMPIAR FORMULARIO
      setCliente({
        id_cliente: "",
        nombre: "",
        correo: "",
        celular: "",
        direccion: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error al guardar cliente ❌");
    }
  };

  return (
    <Layout>

      <section className="p-10">

        <h1 className="text-3xl text-center text-pink-600 mb-6">
          Registrar Nuevo Cliente
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4 bg-white p-6 rounded-2xl shadow"
        >

          <input
            type="text"
            name="id_cliente"
            placeholder="Cédula"
            value={cliente.id_cliente}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={cliente.nombre}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={cliente.correo}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="celular"
            placeholder="Celular"
            value={cliente.celular}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={cliente.direccion}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded-xl hover:bg-pink-600"
          >
            Guardar Cliente
          </button>

          <div className="flex gap-4 mt-4">

          <button
            type="button"
            onClick={() => navigate("/clientes")}
            className="w-full bg-pink-200 text-pink-700 py-2 rounded hover:bg-pink-300"
          >
            Ver Clientes
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
          >
            Inicio
          </button>

        </div>

        </form>

      </section>

    </Layout>
  );
}

export default NuevoCliente;