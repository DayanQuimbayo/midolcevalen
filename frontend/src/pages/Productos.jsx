import { useEffect, useState } from "react";
import Layout from "../components/Layout";

import { GiCandleFlame } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaSpa } from "react-icons/fa";
import { GiLotusFlower } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { obtenerProductos } from "../servicios/productosService";
import { useNavigate } from "react-router-dom";
import { MdAddBox } from "react-icons/md";

function Productos() {

  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);

  useEffect(() => {


      const cargarProductos = async () => {

    try {

      const datos = await obtenerProductos();

      setProductos(datos);

    } catch (error) {

      console.error(error);

    }
  };

  cargarProductos();

  }, []);

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

          <h2 className="text-3xl font-bold text-pink-600 text-center mt-16 mb-8">
            Catálogo Disponible
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">

              {productos.map((producto) => (

                <div
                  key={producto.id}
                  className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition duration-300"
                >

                  <h3 className="text-2xl font-bold text-pink-500 mb-3">
                    {producto.nombre}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {producto.descripcion}
                  </p>

                  <p className="font-bold text-pink-600 text-lg">
                    ${producto.precio}
                  </p>

                  <p className="text-gray-500 mt-2">
                    Stock: {producto.stock}
                  </p>

                  <p className="text-gray-500">
                    Categoría: {producto.categoria}
                  </p>

                </div>

              ))}

            </div>
        </div>

        <div className="text-center mb-8">

        <button
          onClick={() => navigate("/nuevo-producto")}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 mx-auto">
          <MdAddBox className="text-xl" />
          Nuevo Producto
        </button>
      </div>

      </section>

    </Layout>
  );
}

export default Productos;