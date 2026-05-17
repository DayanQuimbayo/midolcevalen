import Layout from "../components/Layout";

function Productos() {

  return (

    <Layout>

      <section className="min-h-screen bg-pink-50 p-10">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
            Nuestros Productos
          </h1>

          <p className="text-center text-gray-600 mb-10">
            Muy pronto encontrarás aquí nuestro catálogo completo 🌸
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h2 className="text-xl text-pink-500 font-semibold mb-2">
                Velas Artesanales
              </h2>

              <p className="text-gray-500">
                Diseños decorativos y aromáticos hechos con amor.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h2 className="text-xl text-pink-500 font-semibold mb-2">
                Repostería
              </h2>

              <p className="text-gray-500">
                Detalles dulces para ocasiones especiales.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h2 className="text-xl text-pink-500 font-semibold mb-2">
                Jabones Artesanales
              </h2>

              <p className="text-gray-500">
                Cuidado natural y delicado para la piel.
              </p>
            </div>

          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Productos;