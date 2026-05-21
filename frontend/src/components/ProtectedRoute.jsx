import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const usuario = localStorage.getItem("usuario");

  // ❌ si no hay sesión
  if (!usuario) {
    return <Navigate to="/login" />;
  }

  // ✅ si hay sesión
  return children;
}

export default ProtectedRoute;