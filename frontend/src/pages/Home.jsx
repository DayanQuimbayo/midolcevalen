import { useState, useEffect } from "react";
import { crearCliente, obtenerClientes } from "../servicios/clienteService";
import Layout from "../components/Layout";

import logo from "../assets/logo.png";
import catalogoVelas from "../assets/CatalogoVelasGeneral2026.png";
import catalogoReposteria from "../assets/CatalogoGeneral.png";
import catalogoJabones from "../assets/PortadaCatalogojabones2026.png";

function Home() {

  const [cliente, setCliente] = useState({
    idCliente: "",
    nombre: "",
    correo: "",
    celular: "",
    direccion: ""
  });

  const [clientes, setClientes] = useState([]);

  // 🔥 CARGAR CLIENTES (como antes)
  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = async () => {
    try {
      const data = await obtenerClientes();
      setClientes(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(cliente.correo)) {
      alert("⚠️ Ingresa un correo válido");
      return;
    }

    try {
      const clienteEnviar = {
        id_cliente: parseInt(cliente.idCliente),
        nombre: cliente.nombre,
        correo: cliente.correo,
        celular: cliente.celular,
        direccion: cliente.direccion
      };

      await crearCliente(clienteEnviar);
      alert("Cliente guardado con éxito ✅");

      cargarClientes();

      setCliente({
        idCliente: "",
        nombre: "",
        correo: "",
        celular: "",
        direccion: ""
      });

    } catch (error) {
      alert("Error al guardar");
    }
  };

  return (
    <Layout>

      {/* CATÁLOGOS */}
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

      {/* Nosotros */}

      <section id="nosotros" className="p-10 bg-white">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl font-semibold text-pink-600 mb-6">
      Sobre Nosotros
    </h2>

    <img 
  src={logo} 
  className="mx-auto w-32 mb-6 opacity-90"
/>

    <p className="text-gray-600 leading-relaxed mb-6">
      Soy una mujer emprendedora, mamá y apasionada por crear detalles que transmiten amor.
      En <span className="text-pink-500 font-medium">Mi Dolce Valen</span> 
      nace como un sueño familiar, inspirado en la fe, la dedicación y el deseo de llevar 
      alegría a cada hogar a través de productos artesanales.
      creemos que cada detalle tiene un propósito especial. Somos un emprendimiento 
      familiar creado con amor, dedicación y fe, enfocado en ofrecer productos 
      artesanales que transmiten alegría, dulzura y bienestar.
    </p>

    <p className="text-gray-600 leading-relaxed mb-6">
      Cada vela, jabón o detalle es elaborado con cuidado, pensando en crear experiencias 
      únicas, momentos especiales y regalos con significado. Aquí no solo vendemos productos, 
      compartimos emociones, paz y esperanza.
    </p>

  </div>
</section>

{/* MISIÓN Y VISIÓN */}
    <div className="grid md:grid-cols-2 gap-6 text-left mb-10">

      <div className="bg-rose-50 p-6 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Misión</h3>
        <p className="text-gray-600 text-sm">
          Crear productos artesanales con amor, calidad y propósito, que transmitan 
          bienestar, alegría y un mensaje de fe en cada detalle, brindando experiencias 
          únicas a nuestros clientes.
        </p>
      </div>

      <div className="bg-rose-50 p-6 rounded-2xl shadow-sm">
        <h3 className="text-xl font-semibold text-pink-600 mb-2">Visión</h3>
        <p className="text-gray-600 text-sm">
          Ser una marca reconocida por inspirar emociones y conectar corazones, 
          llevando nuestros productos a más hogares y convirtiéndonos en una opción 
          confiable y especial para regalos con significado.
        </p>
      </div>

    </div>

    {/* VALORES */}
    <div className="bg-white border border-rose-100 p-6 rounded-2xl shadow-sm">

      <h3 className="text-xl font-semibold text-pink-600 mb-4 text-center">
        Nuestros Valores
      </h3>

      <div className="grid md:grid-cols-2 text-center gap-4 text-gray-600 text-sm">

        <p>💖 Amor en cada detalle</p>
        <p>🙏 Fe y propósito</p>
        <p>✨ Calidad artesanal</p>
        <p>🤝 Compromiso con nuestros clientes</p>
        <p>🌸 Creatividad e inspiración</p>
        <p>🌿 Bienestar y armonía</p>

         
      </div>

       <p className="text-gray-700 text-center font-medium mt-8">
      Más que productos, creamos emociones
    </p>

    </div>

      {/* FORMULARIO */}
      <section className="p-10 bg-white">
        <h2 className="text-xl text-center text-pink-600 mb-4">
          Registrar Cliente
        </h2>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">

          <input name="idCliente" placeholder="Cédula" value={cliente.idCliente} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="nombre" placeholder="Nombre" value={cliente.nombre} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="correo" placeholder="Correo" value={cliente.correo} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="celular" placeholder="Celular" value={cliente.celular} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="direccion" placeholder="Dirección" value={cliente.direccion} onChange={handleChange} className="w-full p-2 border rounded" />

          <button className="w-full bg-pink-500 text-white p-2 rounded">
            Guardar Cliente
          </button>

        </form>
      </section>

    </Layout>
  );
}

export default Home;