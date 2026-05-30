import { useState } from "react";
import Layout from "../components/Layout";

function NuevoProducto() {

  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    categoria: "",
    imagen: "",
    estado: true
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>

      <div className="max-w-2xl mx-auto p-8">

        <h1 className="text-3xl font-bold text-pink-600 mb-6">
          Nuevo Producto
        </h1>

        <form className="bg-white shadow-lg rounded-2xl p-6">

          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripción"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="number"
            id="precio"
            name="precio"
            placeholder="Precio"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="number"
            id="stock"
            name="stock"
            placeholder="Stock"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            id="categoria"
            name="categoria"
            placeholder="Categoría"
            onChange={handleChange}
            className="w-full border p-3 rounded mb-4"
          />

          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg"
          >
            Guardar Producto
          </button>

        </form>

      </div>

    </Layout>
  );
}

export default NuevoProducto;