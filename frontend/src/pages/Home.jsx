import Layout from "../components/Layout";

import logo from "../assets/logo.png";
import catalogoVelas from "../assets/CatalogoVelasGeneral2026.png";
import catalogoReposteria from "../assets/CatalogoGeneral.png";
import catalogoJabones from "../assets/PortadaCatalogojabones2026.png";

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

      
    </Layout>
  );
}

export default Home;