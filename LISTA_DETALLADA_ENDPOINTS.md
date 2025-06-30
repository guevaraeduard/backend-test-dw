# LISTA DETALLADA DE ENDPOINTS - BACKEND E-COMMERCE

## 📋 RESUMEN GENERAL

**Base URL:** `http://localhost:3001/api`  
**Prefijo Global:** `/api`  
**Autenticación:** JWT Bearer Token (excepto donde se indique)

---

## 🔐 MÓDULO DE AUTENTICACIÓN (`/api/auth`)

### 1. **POST** `/api/auth/register`
**Descripción:** Registrar un nuevo usuario en el sistema  
**Autenticación:** No requerida  
**Body (JSON):**
```json
{
  "name": "string (requerido)",
  "email": "string (requerido, formato email válido)",
  "password": "string (requerido, min 6, max 50, con mayúscula, minúscula y número)"
}
```
**Validaciones:**
- Nombre: texto no vacío
- Email: formato válido, único en la base de datos
- Contraseña: mínimo 6 caracteres, máximo 50, debe contener mayúscula, minúscula y número
**Respuesta:** Usuario creado con contraseña cifrada

### 2. **POST** `/api/auth/login`
**Descripción:** Iniciar sesión y obtener token JWT  
**Autenticación:** No requerida  
**Body (JSON):**
```json
{
  "email": "string (requerido, formato email válido)",
  "password": "string (requerido)",
  "type": "string (opcional)"
}
```
**Validaciones:**
- Email: formato válido
- Contraseña: debe coincidir con la almacenada
**Respuesta:** Token JWT y datos del usuario (sin contraseña)

### 3. **POST** `/api/auth/validate-token`
**Descripción:** Validar token JWT y obtener información del usuario  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Body:** No requerido  
**Respuesta:** Usuario autenticado y token validado

### 4. **GET** `/api/auth/users`
**Descripción:** Obtener lista de todos los usuarios registrados  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Body:** No requerido  
**Respuesta:** Array de usuarios (sin contraseñas)

---

## 📦 MÓDULO DE PRODUCTOS (`/api/product`)

### 5. **POST** `/api/product`
**Descripción:** Crear un nuevo producto  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Body (JSON):**
```json
{
  "name": "string (requerido)",
  "sku": "string (requerido, único)",
  "description_short": "string (requerido)",
  "description": "string (opcional)",
  "category": "string (requerido, MongoDB ObjectId válido)",
  "image": "string (requerido, URL de imagen)",
  "price": "number (requerido)",
  "price_original": "number (opcional)",
  "stock": "number (requerido)",
  "warranty": "string (opcional)",
  "weight": "number (opcional)",
  "dimensions": "string (opcional)",
  "characteristics": "string[] (opcional)",
  "tags": "string[] (opcional)",
  "active": "boolean (opcional, default: true)",
  "outstanding": "boolean (opcional, default: false)",
  "status": "boolean (opcional, default: true)"
}
```
**Validaciones:**
- SKU: debe ser único en la base de datos
- Categoría: debe ser un ObjectId válido de MongoDB
- Precio y stock: números positivos
**Respuesta:** Producto creado con timestamps

### 6. **GET** `/api/product`
**Descripción:** Obtener lista de productos con filtros opcionales  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Query Parameters:**
- `category`: string (opcional) - Filtrar por ID de categoría
- `search`: string (opcional) - Buscar por nombre o descripción
**Respuesta:** Array de productos filtrados

### 7. **GET** `/api/product/:id`
**Descripción:** Obtener un producto específico por ID  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Path Parameters:**
- `id`: string (requerido) - MongoDB ObjectId del producto
**Validaciones:**
- ID: debe ser un ObjectId válido de MongoDB
**Respuesta:** Producto específico o error 404 si no existe

### 8. **PATCH** `/api/product/:id`
**Descripción:** Actualizar un producto existente  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Path Parameters:**
- `id`: string (requerido) - MongoDB ObjectId del producto
**Body (JSON):** Mismos campos que POST, pero todos opcionales
**Validaciones:**
- ID: debe ser un ObjectId válido de MongoDB
- Si se actualiza SKU: debe ser único
**Respuesta:** Producto actualizado

### 9. **DELETE** `/api/product/:id`
**Descripción:** Eliminar un producto  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Path Parameters:**
- `id`: string (requerido) - MongoDB ObjectId del producto
**Validaciones:**
- ID: debe ser un ObjectId válido de MongoDB
**Respuesta:** Confirmación de eliminación

### 10. **PATCH** `/api/product/change-active/:id`
**Descripción:** Cambiar el estado activo/inactivo de un producto  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Path Parameters:**
- `id`: string (requerido) - MongoDB ObjectId del producto
**Body:** No requerido  
**Respuesta:** Producto con estado actualizado

---

## 📂 MÓDULO DE CATEGORÍAS (`/api/category`)

### 11. **POST** `/api/category`
**Descripción:** Crear una nueva categoría  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Body (JSON):**
```json
{
  "name": "string (requerido)",
  "description": "string (opcional)",
  "image": "string (requerido, URL de imagen)",
  "order": "number (opcional)",
  "status": "boolean (opcional, default: true)"
}
```
**Validaciones:**
- Nombre: texto no vacío
- Imagen: URL válida
**Respuesta:** Categoría creada con timestamps

### 12. **GET** `/api/category`
**Descripción:** Obtener lista de todas las categorías  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Body:** No requerido  
**Respuesta:** Array de categorías

### 13. **GET** `/api/category/:id`
**Descripción:** Obtener una categoría específica por ID  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Path Parameters:**
- `id`: string (requerido) - MongoDB ObjectId de la categoría
**Validaciones:**
- ID: debe ser un ObjectId válido de MongoDB
**Respuesta:** Categoría específica o error 404 si no existe

### 14. **PATCH** `/api/category/:id`
**Descripción:** Actualizar una categoría existente  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Path Parameters:**
- `id`: string (requerido) - MongoDB ObjectId de la categoría
**Body (JSON):** Mismos campos que POST, pero todos opcionales
**Validaciones:**
- ID: debe ser un ObjectId válido de MongoDB
**Respuesta:** Categoría actualizada

### 15. **PATCH** `/api/category/change-active/:id`
**Descripción:** Cambiar el estado activo/inactivo de una categoría  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Path Parameters:**
- `id`: string (requerido) - MongoDB ObjectId de la categoría
**Body:** No requerido  
**Respuesta:** Categoría con estado actualizado

### 16. **DELETE** `/api/category/:id`
**Descripción:** Eliminar una categoría  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Path Parameters:**
- `id`: string (requerido) - MongoDB ObjectId de la categoría
**Validaciones:**
- ID: debe ser un ObjectId válido de MongoDB
**Respuesta:** Confirmación de eliminación

---

## 🛒 MÓDULO DE PEDIDOS (`/api/pedidos`)

### 17. **POST** `/api/pedidos`
**Descripción:** Crear un nuevo pedido  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Body (JSON):**
```json
{
  "user": "string (requerido, MongoDB ObjectId del usuario)",
  "shippingAddress": {
    "address": "string (requerido)",
    "city": "string (requerido)",
    "zipCode": "string (requerido)",
    "phone": "string (requerido)"
  },
  "items": [
    {
      "id": "string (requerido, MongoDB ObjectId del producto)",
      "name": "string (requerido)",
      "price": "number (requerido)",
      "quantity": "number (requerido)",
      "image": "string (requerido)"
    }
  ],
  "subtotal": "number (requerido)",
  "savings": "number (requerido)",
  "shippingCost": "number (requerido)",
  "taxes": "number (requerido)",
  "total": "number (requerido)"
}
```
**Validaciones:**
- Usuario: ObjectId válido de MongoDB
- Dirección de envío: todos los campos requeridos
- Items: array no vacío con productos válidos
- Totales: números positivos
**Respuesta:** Pedido creado con estado "Entregado" por defecto

### 18. **GET** `/api/pedidos`
**Descripción:** Obtener lista de todos los pedidos  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Body:** No requerido  
**Respuesta:** Array de todos los pedidos en el sistema

### 19. **GET** `/api/pedidos/user`
**Descripción:** Obtener pedidos del usuario autenticado  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
```
**Body:** No requerido  
**Respuesta:** Array de pedidos del usuario actual

---

## 📁 MÓDULO DE ARCHIVOS (`/api/files`)

### 20. **POST** `/api/files/upload/images`
**Descripción:** Subir una imagen al servidor  
**Autenticación:** Requerida (JWT Bearer Token)  
**Headers:**
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```
**Body (Form Data):**
- `file`: File (requerido) - Archivo de imagen
**Validaciones:**
- Tipo de archivo: solo imágenes (jpg, jpeg, png, gif, webp)
- Tamaño máximo: 10MB
- Nombre único generado automáticamente
**Respuesta:** URL pública de la imagen subida
```json
{
  "url": "http://localhost:3001/api/files/filename.jpg"
}
```

### 21. **GET** `/api/files/:filename`
**Descripción:** Obtener un archivo por nombre  
**Autenticación:** No requerida  
**Path Parameters:**
- `filename`: string (requerido) - Nombre del archivo
**Respuesta:** Archivo solicitado o error 404 si no existe

---

## 🌐 MÓDULO FRONTEND (`/api/frontend`)

### 22. **GET** `/api/frontend/products-categories`
**Descripción:** Obtener productos y categorías para el frontend  
**Autenticación:** No requerida  
**Body:** No requerido  
**Respuesta:** Datos combinados de productos y categorías para mostrar en el frontend

### 23. **GET** `/api/frontend/category/:slug`
**Descripción:** Obtener categoría por slug para el frontend  
**Autenticación:** No requerida  
**Path Parameters:**
- `slug`: string (requerido) - Slug de la categoría
**Respuesta:** Categoría específica con sus productos

### 24. **GET** `/api/frontend/product/:id`
**Descripción:** Obtener producto específico por ID para el frontend  
**Autenticación:** No requerida  
**Path Parameters:**
- `id`: string (requerido) - MongoDB ObjectId del producto
**Validaciones:**
- ID: debe ser un ObjectId válido de MongoDB
**Respuesta:** Producto específico para mostrar en el frontend

---

## 📊 RESUMEN ESTADÍSTICO

### **Total de Endpoints:** 24

### **Por Método HTTP:**
- **GET:** 12 endpoints (50%)
- **POST:** 8 endpoints (33.3%)
- **PATCH:** 3 endpoints (12.5%)
- **DELETE:** 1 endpoint (4.2%)

### **Por Autenticación:**
- **Requieren Autenticación:** 20 endpoints (83.3%)
- **Públicos:** 4 endpoints (16.7%)

### **Por Módulo:**
- **Autenticación:** 4 endpoints
- **Productos:** 6 endpoints
- **Categorías:** 6 endpoints
- **Pedidos:** 3 endpoints
- **Archivos:** 2 endpoints
- **Frontend:** 3 endpoints

### **Endpoints Públicos (sin autenticación):**
1. `POST /api/auth/register` - Registro de usuarios
2. `POST /api/auth/login` - Inicio de sesión
3. `GET /api/files/:filename` - Obtener archivos
4. `GET /api/frontend/products-categories` - Datos para frontend
5. `GET /api/frontend/category/:slug` - Categoría por slug
6. `GET /api/frontend/product/:id` - Producto específico

### **Endpoints Críticos (requieren autenticación):**
- Todos los endpoints de gestión de productos
- Todos los endpoints de gestión de categorías
- Todos los endpoints de pedidos
- Carga de archivos
- Validación de tokens
- Lista de usuarios

---

## 🔧 CONFIGURACIÓN DE CORS

El servidor está configurado con CORS habilitado para:
- **Origin:** `true` (cualquier origen)
- **Methods:** `GET, PATCH, POST, DELETE, UPDATE, OPTIONS`
- **Headers:** `X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Access-Control-Allow-Origin, Authorization`
- **Credentials:** `true`

---

## ⚠️ NOTAS IMPORTANTES

1. **Validación de IDs:** Todos los IDs de MongoDB se validan con `ParseMongoIdPipe`
2. **Autenticación:** Los endpoints protegidos requieren header `Authorization: Bearer <token>`
3. **Validación de Datos:** Todos los DTOs usan `class-validator` para validación
4. **Respuestas:** Todas las respuestas son en formato JSON
5. **Códigos de Estado:** Se usan códigos HTTP estándar (200, 201, 400, 401, 404, 500)
6. **Timestamps:** Todas las entidades incluyen `createdAt` y `updatedAt`
7. **Soft Delete:** No implementado - las eliminaciones son permanentes
8. **Paginación:** No implementada en los listados
9. **Filtros Avanzados:** Limitados a categoría y búsqueda de texto

---

**Documento generado:** $(date)  
**Versión del proyecto:** 0.0.1  
**Total de endpoints documentados:** 24 