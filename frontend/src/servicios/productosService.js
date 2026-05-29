const URL = "http://localhost:8080/productos";

export const obtenerProductos = async () => {

  const respuesta = await fetch(URL);

  return await respuesta.json();
};