const API_URL = "http://localhost/midolcevalen/backend/usuarios.php";

export async function listarUsuarios() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function crearUsuario(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function actualizarUsuario(id, data) {
  const res = await fetch(`${API_URL}?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function eliminarUsuario(id) {
  const res = await fetch(`${API_URL}?id=${id}`, {
    method: "DELETE",
  });
  return res.json();
}
