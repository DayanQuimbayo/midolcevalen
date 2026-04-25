import axios from "axios";

const API_URL = "http://localhost/midolcevalen/backend"; // Ajusta si cambia

//  Obtener lista de usuarios
export async function obtenerUsuarios() {
  try {
    const respuesta = await axios.get(`${API_URL}/read.php`);
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
}

//  Crear usuario
export async function crearUsuario(datos) {
  try {
    const respuesta = await axios.post(`${API_URL}/create.php`, datos);
    return respuesta.data;
  } catch (error) {
    console.error("Error al crear usuario:", error);
  }
}

//  Actualizar usuario
export async function actualizarUsuario(id, datos) {
  try {
    const respuesta = await axios.post(`${API_URL}/update.php?id=${id}`, datos);
    return respuesta.data;
  } catch (error) {
    console.error("Error al actualizar:", error);
  }
}

//  Eliminar usuario
export async function eliminarUsuario(id) {
  try {
    const respuesta = await axios.get(`${API_URL}/delete.php?id=${id}`);
    return respuesta.data;
  } catch (error) {
    console.error("Error al eliminar:", error);
  }
}