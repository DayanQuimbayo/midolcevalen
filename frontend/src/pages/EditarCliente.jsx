import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerClientes } from "../servicios/clienteService";
import Layout from "../components/Layout";

function EditarCliente() {
  const { id } = useParams(); //  obtiene el id de la URL
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
    id_cliente: "",
    nombre: "",
    correo: "",
    celular: "",
    direccion: ""
  });

  const [guardando, setGuardando] = useState(false);

  // Cargar cliente
  useEffect(() => {
  if (id) {
    cargarCliente();
  }
}, [id]);

  const cargarCliente = async () => {
  const data = await obtenerClientes();

  const clienteEncontrado = data.find(
    (c) => String(c.id_cliente) === String(id)
  );

  if (!clienteEncontrado) {
    console.error("❌ Cliente no encontrado");
    return;
  }

  setCliente(clienteEncontrado);

};

  // 🔥 manejar cambios
  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 guardar cambios
  const handleSubmit = async (e) => {
    e.preventDefault();
  
  // 🔒 activar estado guardando  
    setGuardando(true);

    try {
      await fetch(`http://localhost:8080/clientes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
      });

      alert("✨ Cliente actualizado correctamente");
      navigate("/clientes");

    } catch (error) {
      alert("Error al actualizar ❌");
    }

  // 🔓 desactivar estado guardando
    setGuardando(false);

  };

  return (
    <Layout>
      <div className="p-10">
        <h2 className="text-2xl text-pink-600 mb-6">
          Editar Cliente ✏️
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

          <input
            id="nombre"
            name="nombre"
            value={cliente?.nombre || ""}
            onChange={handleChange}
            placeholder="Nombre"
            className="w-full p-2 border rounded"
          />

          <input
            id="correo"
            name="correo"
            value={cliente?.correo || ""}
            onChange={handleChange}
            placeholder="Correo"
            className="w-full p-2 border rounded"
          />

          <input
            id="celular"
            name="celular"
            value={cliente?.celular || ""}
            onChange={handleChange}
            placeholder="Celular"
            className="w-full p-2 border rounded"
          />

          <input
            id="direccion"
            name="direccion"
            value={cliente?.direccion || ""}
            onChange={handleChange}
            placeholder="Dirección"
            className="w-full p-2 border rounded"
          />

          <button
            disabled={guardando}
            className="bg-pink-500 text-white px-4 py-2 rounded disabled:opacity-50"
>
            {guardando ? "Guardando..." : "Guardar cambios"}
          </button>

        </form>
      </div>
    </Layout>
  );
}

export default EditarCliente;