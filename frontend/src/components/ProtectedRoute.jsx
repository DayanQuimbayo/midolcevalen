import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const usuario = localStorage.getItem("usuario");

  const loginTime = localStorage.getItem("loginTime");

  // Tiempo máximo sesión (1 hora)

  const tiempoMaximo = 60 * 60 * 1000;

  // verificar expiración

  if (loginTime) {

    const tiempoActual = Date.now();

    const diferencia = tiempoActual - loginTime;

    if (diferencia > tiempoMaximo) {

      // cerrar sesión automática

      localStorage.removeItem("usuario");
      localStorage.removeItem("loginTime");

      return <Navigate to="/login" />;
    }
  }

  // no autenticado
  
  if (!usuario) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;