# SOBRE LA BITÁCORA (ESTO ES MUY IMPORTANTE)

Te lo digo claro y directo:

**NO se borra nada**
**NO se sobreescribe**
**SIEMPRE se agrega hacia abajo**

---

## FORMA CORRECTA

```md
# Bitácora del proyecto

## 23 Abril 2026

- Se corrigió error en backend (Cliente.java)
- Se implementó editar cliente
- Se solucionó problema de CORS

---

## 24 Abril 2026

- Se organizó estructura del proyecto
- Se creó carpeta docs
- Se documentó frontend

---

##  Fecha: 06/05/2026

### Actividades realizadas
- Corrección de errores en conexión frontend-backend
- Ajuste del campo id_cliente para mantener consistencia con la base de datos
- Implementación funcional de edición de clientes
- Corrección de error en renderizado de componentes (handleChange no definido)
- Implementación de validaciones en formulario de registro de clientes
- Pruebas de integración con API REST usando fetch
- Corrección de errores 500 del backend
- Organización del proyecto y limpieza de archivos innecesarios

### Problemas encontrados
- Inconsistencia entre idCliente e id_cliente
- Error 500 en backend al guardar clientes
- Problemas de rutas en React Router (id undefined)
- Error de exportaciones en clienteService
- Problemas de CORS

### Soluciones aplicadas
- Se unificó el uso de id_cliente en todo el proyecto
- Se corrigieron métodos en el backend (ClienteController y Cliente.java)
- Se ajustaron rutas dinámicas en React
- Se corrigieron funciones exportadas en servicios
- Se validaron datos antes de enviar al backend

### Estado actual del proyecto
✔ CRUD de clientes funcionando  
✔ Conexión frontend-backend estable  
✔ Edición de clientes funcional  
✔ Validaciones activas  

### Próximos pasos
- Implementar módulo de productos
- Mejorar diseño visual (UI/UX)
- Preparar despliegue (Docker, Vercel, Railway)

# 15 Mayo 2026

## Avances realizados

- Corrección del CRUD de clientes.
- Corrección de visualización de ID cliente.
- Corrección de edición de clientes.
- Corrección de eliminación de clientes.
- Implementación de configuración global CORS en Spring Boot.
- Limpieza y reorganización del ClienteController.
- Validaciones básicas en frontend.
- Verificación de conexión React + Spring Boot + MySQL.
- Pruebas funcionales exitosas de:
  - listar clientes
  - crear clientes
  - editar clientes
  - eliminar clientes

## Problemas encontrados

- Conflictos entre idCliente e id_cliente.
- Error CORS bloqueando peticiones DELETE y GET.
- Métodos incompatibles en ClienteController.
- Configuración inconsistente entre Repository y Service.

## Solución aplicada

- Configuración global de CORS mediante CorsConfig.java.
- Estandarización de id_cliente en frontend y backend.
- Limpieza completa del controlador ClienteController.
- Reinicio y pruebas completas del backend.

## Estado actual

CRUD de clientes funcionando correctamente.

# Avances CRUD clientes

## Correcciones realizadas

- Corrección de conflicto entre idCliente e id_cliente.
- Corrección de formulario Home.jsx.
- Corrección de inputs controlados React.
- Corrección de validaciones del formulario.
- Corrección de registro de clientes.
- Corrección de edición de clientes.
- Corrección de eliminación de clientes.
- Verificación completa del CRUD.

## Resultado

CRUD funcionando correctamente con:
- React
- Spring Boot
- MySQL

# Fecha: 16 de mayo de 2026

Actividades realizadas
Se reorganizó la estructura del frontend.
Se separó el formulario de registro de clientes del Home principal.
Se creó la página independiente NuevoCliente.jsx.
Se configuraron correctamente las rutas con React Router.
Se corrigieron errores relacionados con rutas inexistentes.
Se validó el funcionamiento completo del CRUD de clientes.
Se verificó el guardado correcto en base de datos.
Se corrigieron errores de identificación relacionados con id_cliente.
Se validó la funcionalidad de edición y eliminación de clientes.
Se realizaron pruebas funcionales del frontend y backend.
Resultado

El módulo de clientes quedó funcionando correctamente con:

registro
visualización
edición
eliminación
búsqueda

además de una mejor organización del proyecto frontend.

## Seguridad y Login

Se implementó el inicio de sesión conectado con Spring Boot y MySQL.

Avances:
- Creación de entidad Usuario
- Conexión de login con backend
- Validación de credenciales
- Manejo de errores de autenticación
- Preparación de rutas privadas
- Inicio de gestión de sesión con localStorage

Pendiente:
- Panel administrador
- Protección de rutas
- Cierre de sesión
- JWT

## 📅 17 Mayo 2026

---

# ✅ Avances Realizados

## 🌸 Módulo Clientes

Se completó exitosamente el CRUD de clientes:

- ✅ Registrar cliente
- ✅ Listar clientes
- ✅ Editar clientes
- ✅ Eliminar clientes
- ✅ Búsqueda de clientes

---

## 🌸 Organización Frontend

Se reorganizó la estructura del frontend:

- ✅ Se separó el formulario de clientes del Home
- ✅ Se creó la página:
  - `NuevoCliente.jsx`
- ✅ Se configuraron rutas con React Router
- ✅ Se corrigieron errores de navegación

---

## 🌸 Corrección de Errores

### Backend

Se solucionaron errores relacionados con:

- CORS
- ResponseEntity
- UsuarioService
- Repository
- Mapeos duplicados `/login`
- Métodos inexistentes
- Problemas de compilación Maven

### Frontend

Se solucionaron errores relacionados con:

- JSON.parse()
- Respuestas vacías del backend
- Navegación
- Rutas inexistentes
- Inputs controlados

---

# 🔐 Sistema de Login

## Backend

Se implementó:

- ✅ Modelo Usuario
- ✅ Repository UsuarioRepository
- ✅ UsuarioService
- ✅ AuthController
- ✅ Endpoint `/login`

---

## Frontend

Se implementó:

- ✅ Página Login
- ✅ Validación de credenciales
- ✅ Manejo de sesión con localStorage
- ✅ Navegación al panel administrador
- ✅ Cierre de sesión

---

# 🎨 Mejoras Visuales

## Login

- ✅ Diseño moderno
- ✅ Colores corporativos
- ✅ Mejor distribución visual
- ✅ Sombras y estilos Tailwind

## Panel Administrador

- ✅ Dashboard visual
- ✅ Tarjetas administrativas
- ✅ Diseño elegante
- ✅ Implementación de iconos

---

# ✨ React Icons

Se instaló:

```bash
npm install react-icons