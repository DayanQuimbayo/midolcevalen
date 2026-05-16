import { useState, useEffect } from "react";
import { crearCliente, obtenerClientes } from "../servicios/clienteService";
import Layout from "../components/Layout";

import logo from "../assets/logo.png";
import catalogoVelas from "../assets/CatalogoVelasGeneral2026.png";
import catalogoReposteria from "../assets/CatalogoGeneral.png";
import catalogoJabones from "../assets/PortadaCatalogojabones2026.png";

function Home() {

  // 🔹 ESTADO FORMULARIO
  const [cliente, setCliente] = useState({
    id_cliente: "",
    nombre: "",
    correo: "",
    celular: "",
    direccion: ""
  });

  // 🔹 LISTA DE CLIENTES
  const [clientes, setClientes] = useState([]);

  // 🔹 CARGAR CLIENTES
  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = async () => {
    try {
      const data = await obtenerClientes();
      setClientes(data);
    } catch (error) {
      console.error("Error cargando clientes:", error);
    }
  };

  // 🔹 MANEJO DE INPUTS
  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    });
  };

  // 🔹 ENVIAR FORMULARIO
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ VALIDACIONES
    if (!cliente.idCliente.trim()) {
      alert("La cédula es obligatoria ❌");
      return;
    }

    if (!cliente.nombre.trim()) {
      alert("El nombre es obligatorio ❌");
      return;
    }

    if (!cliente.correo.trim()) {
      alert("El correo es obligatorio ❌");
      return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(cliente.correo)) {
      alert("Correo inválido ❌");
      return;
    }

    if (!cliente.celular.trim()) {
      alert("El celular es obligatorio ❌");
      return;
    }

    if (!cliente.direccion.trim()) {
      alert("La dirección es obligatoria ❌");
      return;
    }

    try {
      // 🔥 IMPORTANTE → respetar id_cliente
      const clienteEnviar = {
        id_cliente: parseInt(cliente.id_cliente),
        nombre: cliente.nombre,
        correo: cliente.correo,
        celular: cliente.celular,
        direccion: cliente.direccion
      };

      console.log("ENVIANDO:", clienteEnviar);

      await crearCliente(clienteEnviar);

      alert("Cliente guardado con éxito ✅");

      // limpiar formulario
      setCliente({
        idCliente: "",
        nombre: "",
        correo: "",
        celular: "",
        direccion: ""
      });

      // recargar lista
      cargarClientes();

    } catch (error) {
      console.error(error);
      alert("Error al guardar ❌");
    }
  };

  return (
    <Layout>

      {/* 🌸 CATÁLOGOS */}
      <section className="p-10 bg-pink-50">
        <h2 className="text-2xl text-center text-pink-600 mb-6">
          Catálogos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <img src={catalogoVelas} className="rounded-xl" />
          <img src={catalogoReposteria} className="rounded-xl" />
          <img src={catalogoJabones} className="rounded-xl" />
        </div>
      </section>

      {/* 🌸 NOSOTROS */}
      <section id="nosotros" className="p-10 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold text-pink-600 mb-6">
            Sobre Nosotros
          </h2>

          <img src={logo} className="mx-auto w-32 mb-6 opacity-90" />

          <p className="text-gray-600 mb-6">
            Soy una mujer emprendedora, mamá y apasionada por crear detalles que transmiten amor.
            En <span className="text-pink-500 font-medium">Mi Dolce Valen</span> nace como un sueño familiar.
          </p>

          <p className="text-gray-600">
            Cada producto está hecho con amor, fe y propósito 💖
          </p>

        </div>
      </section>

      {/* 🌸 FORMULARIO */}
      <section className="p-10 bg-white">
        <h2 className="text-xl text-center text-pink-600 mb-4">
          Registrar Cliente
        </h2>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">

          <input
            name="idCliente"
            placeholder="Cédula"
            value={cliente.idCliente}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            name="nombre"
            placeholder="Nombre"
            value={cliente.nombre}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            name="correo"
            placeholder="Correo"
            value={cliente.correo}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            name="celular"
            placeholder="Celular"
            value={cliente.celular}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            name="direccion"
            placeholder="Dirección"
            value={cliente.direccion}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600">
            Guardar Cliente
          </button>

        </form>
      </section>

    </Layout>
  );
}

export default Home;