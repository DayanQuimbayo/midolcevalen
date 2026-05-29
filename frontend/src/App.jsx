import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ListaClientes from "./pages/ListaClientes";
import EditarCliente from "./pages/EditarCliente";
import NuevoCliente from "./pages/NuevoCliente";
import Admin from "./pages/Admin";
import Productos from "./pages/Productos";
import ProtectedRoute from "./components/ProtectedRoute";
import NuevoProducto from "./pages/NuevoProducto";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/clientes" element={<ProtectedRoute>
              <ListaClientes />
            </ProtectedRoute>
          }
        />

        <Route path="/editar/:id" element={<EditarCliente />} />

        <Route path="/nuevocliente" element={<ProtectedRoute>
              <NuevoCliente />
            </ProtectedRoute>
          }
        />

        <Route path="/admin" element={<ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
        />

        <Route
          path="/productos" element={<ProtectedRoute>
              <Productos />
            </ProtectedRoute>
          }
        />

        <Route path="/nuevo-producto" element={<ProtectedRoute>
              <NuevoProducto />
           </ProtectedRoute>
         }
        />
                    
  

      </Routes>
    </BrowserRouter>
  );
}

export default App;