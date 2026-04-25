import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ListaClientes from "./pages/ListaClientes";
import EditarCliente from "./pages/EditarCliente";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clientes" element={<ListaClientes />} />
        <Route path="/editar/:id" element={<EditarCliente />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;