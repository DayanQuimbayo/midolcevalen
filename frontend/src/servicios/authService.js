import api from "./Api";

export const login = async (email, password) => {
  const res = await api.post("/auth/login.php", { email, password });
  return res.data;
};

export const register = async (nombre, email, password) => {
  const res = await api.post("/auth/register.php", { nombre, email, password });
  return res.data;
};

export const getUser = async () => {
  const res = await api.get("/auth/user.php");
  return res.data;
};