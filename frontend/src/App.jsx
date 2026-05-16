import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ListaClientes from "./pages/ListaClientes";
import EditarCliente from "./pages/EditarCliente";
import NuevoCliente from "./pages/NuevoCliente";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clientes" element={<ListaClientes />} />
        <Route path="/editar/:id" element={<EditarCliente />} />
        <Route path="/nuevo-cliente" element={<NuevoCliente />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;