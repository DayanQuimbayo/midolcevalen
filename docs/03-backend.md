GET /clientes → lista clientes  
POST /clientes → crea cliente  
PUT /clientes/{id} → edita cliente  
DELETE /clientes/{id} → elimina cliente 

## Configuración CORS

Se implementó una configuración global CORS mediante el archivo:

config/CorsConfig.java

Esto permite la comunicación entre:

Frontend:
http://localhost:5173

Backend:
http://localhost:8080

Métodos habilitados:
- GET
- POST
- PUT
- DELETE