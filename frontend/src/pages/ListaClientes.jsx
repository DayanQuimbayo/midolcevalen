import { useEffect, useState } from "react";
import { obtenerClientes, eliminarCliente } from "../servicios/clienteService";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function ListaClientes() {
  // Estado donde guardamos los clientes
  const [clientes, setClientes] = useState([]);

  // Para navegar entre páginas
  const navigate = useNavigate();

  // Se ejecuta cuando carga la página
  useEffect(() => {
    cargarClientes();
  }, []);

  // Función para traer clientes del backend
  const cargarClientes = async () => {
    try {
      const data = await obtenerClientes();
      setClientes(data); // guardamos los clientes
    } catch (error) {
      console.error("Error al cargar clientes:", error);
    }
  };

  // Función para eliminar cliente
  const handleEliminar = async (id) => {
  const confirmar = window.confirm("¿Estás segura de eliminar este cliente? 😢");

  if (!confirmar) return;

  try {
    await eliminarCliente(id);
    alert("Cliente eliminado correctamente 🗑️");
    cargarClientes(); // RECARGA LA TABLA

  } catch (error) {
    console.error(error);
    alert("Error al eliminar cliente ❌");
  }
};
  return (
    <Layout>
      <div className="p-8">

        {/* TÍTULO */}
        <h1 className="text-3xl font-bold text-pink-600 mb-6">
          💖 Clientes registrados
        </h1>

        {/* BOTÓN CREAR */}
        <button
          onClick={() => navigate("/crear")}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition">
          + Nuevo Cliente
        </button>

        {/* TABLA */}
        <table className="w-full mt-6 border rounded-lg overflow-hidden shadow-md">
          <thead className="bg-pink-100 text-pink-700">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Correo</th>
              <th className="p-3 text-left">Celular</th>
              <th className="p-3 text-left">Dirección</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.length > 0 ? (
              clientes.map((cli) => (
                <tr
                  key={`${cli.id_cliente}-${cli.nombre}`}
                  className="border-t hover:bg-pink-50">
                  <td className="p-3">{cli.id_cliente}</td>
                  <td className="p-3">{cli.nombre}</td>
                  <td className="p-3">{cli.correo}</td>
                  <td className="p-3">{cli.celular}</td>
                  <td className="p-3">{cli.direccion}</td>

                  <td className="p-3 flex gap-2 justify-center">
                    <button
                      onClick={() => navigate(`/editar/${cli.id_cliente}`)}
                      className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500">
                      Editar
                    </button>

                    <button
                      onClick={() => handleEliminar(cli.id_cliente)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No hay clientes registrados 😢
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </Layout>
  );
}