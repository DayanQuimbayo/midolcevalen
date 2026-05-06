# 🎨 Frontend - Mi Dolce Valen

## 📌 Descripción

El frontend del sistema está desarrollado con React utilizando Vite, permitiendo una interfaz moderna, rápida y dinámica para la gestión de clientes del emprendimiento Mi Dolce Valen.

El frontend se encarga de:

- Mostrar la información al usuario
- Capturar datos desde formularios
- Consumir los servicios del backend (API REST)
- Navegar entre páginas del sistema

---

## 🏗️ Estructura del Frontend

Ubicación:

frontend/src/

Organización:

- pages/ → páginas principales
- components/ → componentes reutilizables
- servicios/ → conexión con el backend
- App.jsx → configuración de rutas

---

## 📄 Páginas del sistema

### 🏠 Home.jsx

Página principal del sistema.

Funciones:
- Muestra información del emprendimiento
- Presenta catálogos (velas, repostería, jabones)
- Contiene el formulario de registro de clientes

Conexión:
- Usa `crearCliente()` para enviar datos al backend

---

### 📋 ListaClientes.jsx

Página donde se visualizan todos los clientes registrados.

Funciones:
- Mostrar clientes en tabla
- Eliminar clientes
- Navegar a editar cliente

Conexión:
- Usa `obtenerClientes()` para listar datos
- Usa `eliminarCliente(id)` para eliminar

---

### ✏️ EditarCliente.jsx

Permite modificar la información de un cliente existente.

Funciones:
- Cargar datos del cliente seleccionado
- Editar información
- Guardar cambios

Conexión:
- Obtiene clientes desde backend
- Envía cambios con método PUT

---

### 🔐 Login.jsx (básico)

Página de inicio de sesión (estructura inicial).

Funciones:
- Entrada al sistema (pendiente de implementación completa)

---

## 🧩 Componentes

### 🧱 Layout.jsx

Componente base del sistema.

Incluye:
- Header (logo + navegación)
- Versículo bíblico (global)
- Contenedor de contenido
- Footer

Importancia:
Permite reutilizar la misma estructura en todas las páginas.

---

## 🔌 Servicios (Conexión con Backend)

Ubicación:

frontend/src/servicios/clienteService.js

Funciones principales:

- crearCliente()
- obtenerClientes()
- eliminarCliente()

Estas funciones utilizan fetch para conectarse con:

http://localhost:8080/clientes

---

## 🔄 Flujo de funcionamiento

Usuario → Interfaz (React) → Servicio (fetch) → Backend → Base de datos

Ejemplo:

1. Usuario llena formulario
2. React captura datos
3. Se envía al backend (POST)
4. Backend guarda en MySQL
5. Se actualiza la interfaz

---

## 🚀 Ejecución del Frontend

Pasos:

```bash
cd frontend
npm install
npm run dev