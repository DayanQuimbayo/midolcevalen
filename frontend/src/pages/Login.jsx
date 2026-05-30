import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { FaHeart } from "react-icons/fa";

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

      const texto = await respuesta.text();

      if (!texto) {

        alert("Usuario o contraseña incorrectos ❌");

        return;
      }

      const usuario = JSON.parse(texto);

      localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
      );

      localStorage.setItem(
        "loginTime",
        Date.now()
       );

      alert("Bienvenido " + usuario.nombre + " 💖");

      navigate("/admin");

    } catch (error) {

      console.error(error);

      alert("Error al conectar con el servidor ❌");
    }
  };

  return (

    <div className="min-h-screen bg-pink-50 flex flex-col">

      {/* 🌸 NAVBAR */}
      <header className="bg-white shadow-md">

        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 rounded-full"
            />

            <Link to="/">
            <h1 className="text-2xl font-semibold text-pink-600 tracking-wide cursor-pointer">
              Mi Dolce Valen
            </h1>
          </Link>

          </div>

          <nav className="flex gap-6 text-gray-600 font-medium">

            <Link to="/" className="hover:text-pink-500">
              Inicio
            </Link>

            <Link to="/productos" className="hover:text-pink-500">
              Productos
            </Link>

          </nav>

        </div>

      </header>

      {/* 🌸 LOGIN */}
      <main className="flex-1 flex items-center justify-center p-6">

        <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

          <div className="text-center mb-6">

            <img
              src={logo}
              alt="Logo"
              className="w-24 mx-auto mb-4"
            />

            <h2 className="text-3xl font-bold text-pink-600">
              Iniciar Sesión
            </h2>

            <p className="text-gray-500 mt-2">
              Bienvenido al panel administrativo
            </p>

          </div>

          <form onSubmit={handleLogin} className="space-y-4">

            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="Correo"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />

            <button
              className="w-full bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-xl transition"
            >
              Ingresar
            </button>

          </form>

          {/* 🌸 VERSÍCULO */}
          <div className="mt-8 text-center">

            <p className="text-sm italic text-gray-500">
              “Todo lo puedo en Cristo que me fortalece”
            </p>

            <span className="text-pink-500 text-sm">
              Filipenses 4:13
            </span>

          </div>

        </div>

      </main>

      {/* 🌸 FOOTER */}
      <footer className="bg-white shadow-inner text-center p-4 text-gray-500 text-sm">

        © 2026 Mi Dolce Valen hecho con{" "}
        <FaHeart className="inline text-pink-500 mx-1" />
        amor

      </footer>

    </div>
  );
}

export default Login;