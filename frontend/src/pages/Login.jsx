import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";


function Login() {

  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    correo: "",
    password: ""
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  try {

    const respuesta = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    });

    // 🔥 Leer respuesta como texto primero
    const texto = await respuesta.text();

    // ❌ Login incorrecto
    if (!texto) {
  alert("Contraseña o Usuario Incorrecto ❌");
  return;
  }


    // ✅ Convertir texto a JSON
    const usuario = JSON.parse(texto);

    alert("Bienvenido " + usuario.nombre);

  } catch (error) {

    console.error(error);

    alert("Error al conectar con el servidor ❌");
  }
};

  return (
  <div className="bg-pink-50 min-h-screen flex items-center justify-center">

    <form 
      onSubmit={handleLogin} 
      className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
    >

      <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
        Iniciar Sesión
      </h2>

      <input
        name="correo"
        placeholder="Correo"
        onChange={handleChange}
        className="w-full p-3 border rounded mb-4"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        onChange={handleChange}
        className="w-full p-3 border rounded mb-6"
        required
      />

      <button className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
        Ingresar
      </button>

    </form>

  </div>
);
}

export default Login;