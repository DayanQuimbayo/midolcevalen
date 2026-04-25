const API_URL = "http://localhost:8080/clientes";

// CREAR CLIENTE 
export const crearCliente = async (cliente) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cliente),
  });

  if (!response.ok) {
    throw new Error("Error al guardar cliente");
  }

  return await response.json();
};

// OBTENER CLIENTES
export const obtenerClientes = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener clientes");
  }

  return await response.json();
};

// ELIMINAR CLIENTES

export const eliminarCliente = async (id) => {
  try {
    const res = await fetch(`http://localhost:8080/clientes/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("No se pudo eliminar");
    }

    return res;
  } catch (error) {
    console.error("Error al eliminar cliente:", error);
  }
};