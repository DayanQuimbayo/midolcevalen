import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaHeart } from "react-icons/fa";

function Layout({ children }) {
  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* HEADER */}
      <header className="bg-white/80 backdrop-blur-md py-4 shadow-sm flex items-center justify-between px-10 sticky top-0 z-50">
        
        <div className="flex items-center space-x-4">
          <img src={logo} className="w-16 h-16 object-cover rounded-full" />

          <Link to="/">
            <h1 className="text-2xl font-semibold text-pink-600 tracking-wide cursor-pointer">
              Mi Dolce Valen
            </h1>
          </Link>
        </div>

        <nav className="space-x-4">
          <Link to="/productos" className="text-pink-700 hover:text-pink-900 font-medium">
            Productos
          </Link>

          <Link to="/login" className="text-pink-700 hover:text-pink-900 font-medium">
            Inicio Sesión
          </Link>
        </nav>
      </header>

      {/* 🌸 VERSÍCULO (AHORA GLOBAL) */}
      <section className="p-6 bg-white text-center shadow-sm">
        <p className="text-gray-700 font-medium">
          Todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Colosenses 3:23
        </p>
      </section>

      {/* CONTENIDO */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-white shadow-inner text-center p-4 text-gray-500 text-sm">
      
              © 2026 Mi Dolce Valen hecho con{" "}
              <FaHeart className="inline text-pink-500 mx-1" />
              amor
      
            </footer>

    </div>
  );
}

export default Layout;