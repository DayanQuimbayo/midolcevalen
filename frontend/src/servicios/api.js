import axios from "axios";

const API = axios.create({
  baseURL: "/api", // gracias al proxy en vite.config.js esto apunta a backend/php
  headers: {
    "Content-Type": "application/json"
  }
});

export default API;