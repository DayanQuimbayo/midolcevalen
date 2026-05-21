import Layout from "../components/Layout";

import logo from "../assets/logo.png";
import catalogoVelas from "../assets/CatalogoVelasGeneral2026.png";
import catalogoReposteria from "../assets/CatalogoGeneral.png";
import catalogoJabones from "../assets/PortadaCatalogojabones2026.png";
import {FaInstagram,FaFacebook,FaWhatsapp,FaEnvelope} from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";

function Home() {

 

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

    <p className="text-gray-600 leading-relaxed mb-6">
      Soy una mujer emprendedora, mamá y apasionada por crear detalles que transmiten amor. 
      <span className="text-rose-500 font-medium"> Mi Dolce Valen </span>
      nace como un sueño familiar, inspirado en la fe, la dedicación y el deseo de llevar 
      alegría a cada hogar a través de productos artesanales.
    </p>

    <p className="text-gray-600 leading-relaxed mb-8">
      Cada vela, jabón o detalle es elaborado con cuidado, pensando en crear experiencias 
      únicas, momentos especiales y regalos con significado. Aquí no solo vendemos productos, 
      compartimos emociones, paz y esperanza.
    </p>

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

      <h3 className="text-3xl font-bold text-pink-600 flex items-center justify-center gap-3 mb-6">
        <GiSparkles className="text-yellow-400" />
        Nuestros Valores
        <GiSparkles className="text-yellow-400" />
      </h3>

      <div className="grid md:grid-cols-2 gap-4 text-gray-600 text-sm">

        <p> Amor en cada detalle</p>
        <p> Fe y propósito</p>
        <p> Calidad artesanal</p>
        <p> Compromiso con nuestros clientes</p>
        <p> Creatividad e inspiración</p>
        <p> Bienestar y armonía</p>

      </div>

    </div>

    <p className="text-gray-700 font-medium mt-8">
       Más que productos, creamos emociones 
    </p>

        </div>

      </section>

    {/* 🌸 CONTÁCTENOS */}
<section className="bg-pink-50 py-16">

  <div className="max-w-4xl mx-auto text-center px-6">

    <h2 className="text-3xl font-bold text-pink-600 mb-4">
      Contáctanos
    </h2>

    <p className="text-gray-600 mb-10">
      Estamos felices de atenderte -  
      Síguenos en redes sociales o escríbenos directamente.
    </p>

    <div className="grid md:grid-cols-2 gap-6">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/midolcevalen?igsh=bTB0ajVjYXZwbHN4"
        target="_blank"
        className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition"
      >
        <FaInstagram className="text-4xl text-pink-500" />

        <div className="text-left">
          <h3 className="font-bold text-gray-700">
            Instagram
          </h3>

          <p className="text-gray-500">
            @midolcevalen
          </p>
        </div>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/MiDolceValent/"
        target="_blank"
        className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition"
      >
        <FaFacebook className="text-4xl text-blue-500" />

        <div className="text-left">
          <h3 className="font-bold text-gray-700">
            Facebook
          </h3>

          <p className="text-gray-500">
            Mi Dolce Valen
          </p>
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/573182702729"
        target="_blank"
        className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition"
      >
        <FaWhatsapp className="text-4xl text-green-500" />

        <div className="text-left">
          <h3 className="font-bold text-gray-700">
            WhatsApp
          </h3>

          <p className="text-gray-500">
            +57 318 270 2729
          </p>
        </div>
      </a>

      {/* Correo */}
      <a
        href="mailto:midolcevalen@gmail.com"
        className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition"
      >
        <FaEnvelope className="text-4xl text-red-400" />

        <div className="text-left">
          <h3 className="font-bold text-gray-700">
            Correo
          </h3>

          <p className="text-gray-500">
            midolcevalen@gmail.com
          </p>
        </div>
      </a>

    </div>

  </div>

</section>  

      
    </Layout>
  );
}

export default Home;