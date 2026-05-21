import Layout from "../components/Layout";

import { GiCandleFlame } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaSpa } from "react-icons/fa";
import { GiLotusFlower } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

function Productos() {

  return (

    <Layout>

      <section className="min-h-screen bg-pink-50 p-10">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
            Nuestros Productos
          </h1>

          <p className="text-center text-gray-600 mb-10 flex items-center justify-center gap-2">

            Muy pronto encontrarás aquí nuestro catálogo completo

            <FaStar className="text-pink-500 text-xl" />

          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:scale-105 transition duration-300">

              <GiCandleFlame className="text-6xl text-pink-500 mx-auto mb-4" />

              <h2 className="text-2xl text-pink-500 font-bold mb-3">
                Velas Artesanales
              </h2>

              <p className="text-gray-500">
                Diseños decorativos y aromáticos hechos con amor.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:scale-105 transition duration-300">

              <FaBirthdayCake className="text-6xl text-pink-500 mx-auto mb-4" />

              <h2 className="text-2xl text-pink-500 font-bold mb-3">
                Repostería
              </h2>

              <p className="text-gray-500">
                Detalles dulces y personalizados para momentos especiales.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 text-center hover:scale-105 transition duration-300">

              <FaSpa className="text-6xl text-pink-500 mx-auto mb-4" />

              <h2 className="text-2xl text-pink-500 font-bold mb-3">
                Jabones Artesanales
              </h2>

              <p className="text-gray-500">
                Cuidado natural y delicado para consentir tu piel.
              </p>
              
            </div>

          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Productos;