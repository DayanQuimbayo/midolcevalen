import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Proxy para facilitar llamadas al backend PHP en tu XAMPP
      // Ajusta la ruta si tu backend está en otro folder
      "/api": {
        target: "http://localhost/midolcevalen/backend/php",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});