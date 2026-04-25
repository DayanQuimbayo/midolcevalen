import { useState, useEffect } from "react";
import {
  crearCliente,
  actualizarCliente,
  getClientes,
} from "../servicios/clienteService";
import { useNavigate, useParams } from "react-router-dom";

export default function FormCliente() {
  const [cliente, setCliente] = useState({
    nombre: "",
    email: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) cargarCliente();
  }, []);

  const cargarCliente = async () => {
    const res = await getClientes();
    const clienteEncontrado = res.data.find((c) => c.id == id);
    setCliente(clienteEncontrado);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await actualizarCliente(id, cliente);
    } else {
      await crearCliente(cliente);
    }

    navigate("/");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#fdf2f8"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          width: "300px"
        }}
      >
        <h2 style={{ textAlign: "center", color: "#db2777" }}>
          {id ? "Editar Cliente" : "Nuevo Cliente"}
        </h2>

        <input
          type="text"
          placeholder="Nombre"
          value={cliente.nombre}
          onChange={(e) =>
            setCliente({ ...cliente, nombre: e.target.value })
          }
          style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <input
          type="email"
          placeholder="Email"
          value={cliente.email}
          onChange={(e) =>
            setCliente({ ...cliente, email: e.target.value })
          }
          style={{ width: "100%", margin: "10px 0", padding: "10px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            background: "#ec4899",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px"
          }}
        >
          {id ? "Actualizar" : "Guardar"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px"
          }}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}