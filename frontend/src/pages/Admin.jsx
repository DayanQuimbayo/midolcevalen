import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { FaUsers, FaBoxOpen, FaSignOutAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";


function Admin() {

  const navigate = useNavigate();

  const usuario = JSON.parse(
    localStorage.getItem("usuario")
  );

  // Función para cerrar sesion luego de un tiempo
  const cerrarSesion = () => {

  localStorage.removeItem("usuario");

  localStorage.removeItem("loginTime");

  navigate("/login");

  };

  return (

    <Layout>

      <section className="min-h-screen bg-pink-50 p-8">

        <div className="max-w-6xl mx-auto">

          {/* 🌸 BIENVENIDA */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

            <h1 className="text-3xl font-bold text-pink-600 flex items-center gap-2">
            <FaCrown />
            Bienvenido Admin
            </h1>

            <p className="text-gray-600 text-lg">
              Panel administrativo de Mi Dolce Valen
            </p>

          </div>

          {/* 🌸 CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* CLIENTES */}
            <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition text-center">

            <FaUsers className="text-5xl text-pink-500 mx-auto mb-4" />

            <h2 className="text-xl font-semibold text-gray-700">
              Clientes
            </h2>

            <p className="text-gray-500 mt-2">
              Gestión de clientes registrados
            </p>

              <button
                onClick={() => navigate("/clientes")}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl"
              >
                Entrar
              </button>

            </div>

            {/* PRODUCTOS */}
            <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition text-center">

            <FaBoxOpen className="text-5xl text-pink-500 mx-auto mb-4" />

              <h2 className="text-2xl font-semibold text-pink-600 mb-2">
                Productos
              </h2>

              <p className="text-gray-500 mb-6">
                Administra catálogo y stock.
              </p>

              <button
                onClick={() => navigate("/productos")}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl"
              >
                Entrar
              </button>

            </div>

            {/* PEDIDOS */}
            <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition text-center">

            <FaShoppingBag className="text-5xl text-pink-500 mx-auto mb-4" />


              <h2 className="text-2xl font-semibold text-pink-600 mb-2">
                Pedidos
              </h2>

              <p className="text-gray-500 mb-6">
                Control de pedidos y ventas.
              </p>

              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-xl cursor-not-allowed"
              >
                Próximamente
              </button>

            </div>

          </div>

          {/* 🌸 BOTÓN CERRAR */}
          <div className="mt-10 text-center">

            <button
              onClick={cerrarSesion}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition" >
              Cerrar Sesión
            </button>

          </div>

        </div>

      </section>

    </Layout>
  );
}

export default Admin;