# Backend Test DW

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">Un framework progresivo de <a href="http://nodejs.org" target="_blank">Node.js</a> para construir aplicaciones del lado del servidor eficientes y escalables.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
<a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

## Descripción

API Backend construida con el framework [NestJS](https://github.com/nestjs/nest), que incluye autenticación, integración con MongoDB y operaciones CRUD completas para funcionalidad de comercio electrónico.

Este proyecto implementa un sistema completo de gestión de productos, categorías, pedidos y usuarios, con autenticación JWT y validación robusta de datos. Está diseñado para servir como backend de una aplicación de comercio electrónico.

## Características del Proyecto

- 🔐 **Autenticación y Autorización** - Autenticación basada en JWT con Passport
- 🗄️ **Integración de Base de Datos** - MongoDB con Mongoose ODM
- 📦 **Gestión de Productos** - Operaciones CRUD para productos
- 📂 **Gestión de Categorías** - Sistema de categorización de productos
- 🛒 **Gestión de Pedidos** - Procesamiento y seguimiento de órdenes
- 📁 **Carga de Archivos** - Sistema de gestión de archivos
- 🌐 **CORS Habilitado** - Soporte para intercambio de recursos entre orígenes
- ✅ **Validación de Entrada** - Validación de solicitudes con class-validator
- 🔒 **Seguridad** - Cifrado de contraseñas con bcrypt
- 🧪 **Testing Completo** - Pruebas unitarias y end-to-end
- 📝 **Documentación** - Código bien documentado y estructurado
- 🚀 **Despliegue en Vercel** - Configurado para despliegue automático

## Estructura del Proyecto

```
src/
├── auth/                 # Módulo de autenticación
│   ├── decorators/      # Decoradores personalizados
│   │   ├── auth.decorator.ts      # Decorador para roles de autenticación
│   │   └── get-user.decorator.ts  # Decorador para obtener usuario actual
│   ├── dto/            # Objetos de transferencia de datos
│   │   ├── create-user.dto.ts     # DTO para crear usuarios
│   │   └── login.dto.ts           # DTO para login
│   ├── guards/         # Guardias de autenticación
│   │   └── auth.guard.ts          # Guardia principal de autenticación
│   ├── strategies/     # Estrategias de Passport
│   │   └── jwt.strategy.ts        # Estrategia JWT
│   └── interface/      # Interfaces
│       └── jwt-payload.ts         # Interfaz para payload JWT
├── category/           # Gestión de categorías
│   ├── category.controller.ts     # Controlador de categorías
│   ├── category.service.ts        # Servicio de categorías
│   ├── category.module.ts         # Módulo de categorías
│   └── dto/                       # DTOs de categorías
│       ├── create-category.dto.ts # DTO para crear categorías
│       └── update-category.dto.ts # DTO para actualizar categorías
├── product/            # Gestión de productos
│   ├── product.controller.ts      # Controlador de productos
│   ├── product.service.ts         # Servicio de productos
│   ├── product.module.ts          # Módulo de productos
│   └── dto/                       # DTOs de productos
│       ├── create-product.dto.ts  # DTO para crear productos
│       └── update-product.dto.ts  # DTO para actualizar productos
├── pedidos/            # Gestión de pedidos/órdenes
│   ├── pedidos.controller.ts      # Controlador de pedidos
│   ├── pedidos.service.ts         # Servicio de pedidos
│   ├── pedidos.module.ts          # Módulo de pedidos
│   └── dto/                       # DTOs de pedidos
│       └── create-pedido.dto.ts   # DTO para crear pedidos
├── files/              # Gestión de archivos
│   ├── files.controller.ts        # Controlador de archivos
│   ├── files.service.ts           # Servicio de archivos
│   └── files.module.ts            # Módulo de archivos
├── frontend/           # Integración con frontend
│   ├── frontend.controller.ts     # Controlador de frontend
│   ├── frontend.service.ts        # Servicio de frontend
│   └── frontend.module.ts         # Módulo de frontend
├── entities/           # Entidades/modelos de base de datos
│   ├── user.entity.ts             # Entidad de usuario
│   ├── product.entity.ts          # Entidad de producto
│   ├── category.entity.ts         # Entidad de categoría
│   └── pedido.entity.ts           # Entidad de pedido
├── pipes/              # Pipes personalizados
│   └── parse-mongo-id.pipe.ts     # Pipe para validar IDs de MongoDB
├── helper/             # Utilidades y helpers
│   └── helpers.ts                 # Funciones auxiliares
├── app.module.ts       # Módulo principal de la aplicación
└── main.ts             # Punto de entrada de la aplicación
```

## Módulos y Funcionalidades Detalladas

### 🔐 Módulo de Autenticación (`auth/`)
- **Registro de usuarios**: Creación de nuevas cuentas con validación
- **Inicio de sesión**: Autenticación con JWT
- **Protección de rutas**: Guardias para proteger endpoints
- **Gestión de tokens**: Generación y validación de JWT
- **Decoradores personalizados**: Para obtener información del usuario actual

### 📂 Módulo de Categorías (`category/`)
- **CRUD completo**: Crear, leer, actualizar y eliminar categorías
- **Validación de datos**: DTOs para validar entrada de datos
- **Relaciones**: Conexión con productos
- **Estructura jerárquica**: Organización de categorías

### 📦 Módulo de Productos (`product/`)
- **Gestión de productos**: CRUD completo para productos
- **Categorización**: Asociación con categorías
- **Validación**: DTOs para validar datos de productos
- **Búsqueda y filtrado**: Funcionalidades de consulta

### 🛒 Módulo de Pedidos (`pedidos/`)
- **Creación de pedidos**: Procesamiento de nuevas órdenes
- **Gestión de estado**: Seguimiento del estado de los pedidos
- **Relaciones**: Conexión con usuarios y productos
- **Validación**: DTOs para datos de pedidos

### 📁 Módulo de Archivos (`files/`)
- **Carga de archivos**: Subida de archivos al servidor
- **Gestión de almacenamiento**: Organización de archivos
- **Validación de tipos**: Verificación de tipos de archivo permitidos
- **Almacenamiento local**: Guardado en carpeta `static/uploads/`

### 🌐 Módulo Frontend (`frontend/`)
- **Integración**: Conexión con aplicaciones frontend
- **API endpoints**: Endpoints específicos para frontend
- **CORS**: Configuración para comunicación entre dominios

### 🗄️ Entidades de Base de Datos (`entities/`)
- **User Entity**: Modelo de usuario con campos de autenticación
- **Product Entity**: Modelo de producto con información completa
- **Category Entity**: Modelo de categoría con estructura jerárquica
- **Pedido Entity**: Modelo de pedido con relaciones

## Prerrequisitos

- **Node.js** (versión 16 o superior)
- **MongoDB** (base de datos)
- **npm** o **yarn** (gestor de paquetes)

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd backend-test-dw

# Instalar dependencias
npm install
```

## Despliegue en Vercel

Este proyecto está configurado para desplegarse fácilmente en Vercel. Sigue estos pasos:

### Opción 1: Despliegue Automático (Recomendado)

1. **Sube tu código a GitHub**
2. **Ve a [vercel.com](https://vercel.com)**
3. **Crea una cuenta o inicia sesión**
4. **Haz clic en "New Project"**
5. **Importa tu repositorio de GitHub**
6. **Vercel detectará automáticamente la configuración**
7. **Configura las variables de entorno:**
   - `MONGODB_URI`: Tu conexión de MongoDB
   - `JWT_SECRET`: Tu clave secreta para JWT
   - `NODE_ENV`: `production`
8. **Haz clic en "Deploy"**

### Opción 2: Despliegue con CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar (primer despliegue)
vercel

# Desplegar en producción
vercel --prod
```

### Opción 3: Script Automatizado

```bash
# Ejecutar el script de despliegue (Windows PowerShell)
.\deploy-vercel.ps1
```

### Variables de Entorno en Vercel

Configura estas variables en el dashboard de Vercel:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `MONGODB_URI` | URL de conexión a MongoDB | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Clave secreta para JWT | `mi-clave-super-secreta` |
| `NODE_ENV` | Entorno de ejecución | `production` |

### URLs de la API Desplegada

Una vez desplegado, tu API estará disponible en:
- **Base URL**: `https://tu-proyecto.vercel.app`
- **API Endpoints**: `https://tu-proyecto.vercel.app/api/*`

### Archivos de Configuración

- `vercel.json` - Configuración de Vercel
- `api/index.ts` - Punto de entrada para Vercel
- `DEPLOY_VERCEL.md` - Documentación detallada de despliegue

## Configuración del Entorno

Crear un archivo `.env` en el directorio raíz con las siguientes variables:

```env
PORT=3001
MONGODB_URI=mongodb+srv://tu-usuario:tu-contraseña@tu-cluster.mongodb.net/tu-base-de-datos
JWT_SECRET=tu-clave-secreta-jwt
```

### Variables de Entorno Detalladas

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `PORT` | Puerto en el que se ejecutará la aplicación | `3001` |
| `MONGODB_URI` | URL de conexión a MongoDB | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Clave secreta para firmar tokens JWT | `mi-clave-super-secreta` |

## Ejecución de la Aplicación

```bash
# Modo desarrollo (con recarga automática)
npm run start:dev

# Modo producción
npm run start:prod

# Modo debug
npm run start:debug
```

La aplicación estará disponible en `http://localhost:3001`

## Endpoints de la API

### Autenticación
- `POST /api/auth/register` - Registro de usuarios
- `POST /api/auth/login` - Inicio de sesión

### Categorías
- `GET /api/categories` - Obtener todas las categorías
- `POST /api/categories` - Crear nueva categoría
- `PUT /api/categories/:id` - Actualizar categoría
- `DELETE /api/categories/:id` - Eliminar categoría

### Productos
- `GET /api/products` - Obtener todos los productos
- `POST /api/products` - Crear nuevo producto
- `PUT /api/products/:id` - Actualizar producto
- `DELETE /api/products/:id` - Eliminar producto

### Pedidos
- `GET /api/pedidos` - Obtener todos los pedidos
- `POST /api/pedidos` - Crear nuevo pedido

### Archivos
- `POST /api/files/upload` - Subir archivos

## Ejemplos de Uso de la API

### Registro de Usuario

```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@ejemplo.com",
    "password": "contraseña123",
    "name": "Usuario Ejemplo"
  }'
```

### Inicio de Sesión

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@ejemplo.com",
    "password": "contraseña123"
  }'
```

### Crear Categoría

```bash
curl -X POST http://localhost:3001/api/categories \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <tu-token-jwt>" \
  -d '{
    "name": "Electrónicos",
    "description": "Productos electrónicos y tecnología"
  }'
```

### Crear Producto

```bash
curl -X POST http://localhost:3001/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <tu-token-jwt>" \
  -d '{
    "name": "Smartphone XYZ",
    "description": "Teléfono inteligente de última generación",
    "price": 599.99,
    "category": "categoria-id-aqui",
    "stock": 50
  }'
```

### Crear Pedido

```bash
curl -X POST http://localhost:3001/api/pedidos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <tu-token-jwt>" \
  -d '{
    "products": [
      {
        "productId": "producto-id-aqui",
        "quantity": 2
      }
    ],
    "shippingAddress": "Calle Principal 123, Ciudad"
  }'
```

## Pruebas

```bash
# Pruebas unitarias
npm run test

# Pruebas end-to-end
npm run test:e2e

# Cobertura de pruebas
npm run test:cov

# Modo watch (desarrollo)
npm run test:watch
```

## Calidad del Código

```bash
# Linting (análisis estático)
npm run lint

# Formateo de código
npm run format
```

## Compilación

```bash
# Compilar para producción
npm run build
```

## Tecnologías Utilizadas

- **Framework**: NestJS (framework de Node.js)
- **Base de Datos**: MongoDB con Mongoose (ODM)
- **Autenticación**: JWT con Passport
- **Validación**: class-validator & class-transformer
- **Seguridad**: bcrypt para cifrado de contraseñas
- **Carga de Archivos**: Multer
- **Pruebas**: Jest
- **Linting**: ESLint
- **Formateo**: Prettier
- **Lenguaje**: TypeScript

## Documentación de la API

La API utiliza una arquitectura RESTful con la siguiente URL base:
```
http://localhost:3001/api
```

Todos los endpoints requieren headers de autenticación apropiados (excepto login/register):
```
Authorization: Bearer <token-jwt>
```

### Códigos de Respuesta

| Código | Descripción |
|--------|-------------|
| 200 | OK - Solicitud exitosa |
| 201 | Created - Recurso creado exitosamente |
| 400 | Bad Request - Datos de entrada inválidos |
| 401 | Unauthorized - No autenticado |
| 403 | Forbidden - No autorizado |
| 404 | Not Found - Recurso no encontrado |
| 500 | Internal Server Error - Error del servidor |

## Características de Seguridad

- **Autenticación JWT**: Tokens seguros para autenticación
- **Cifrado de contraseñas**: Uso de bcrypt para hash de contraseñas
- **Validación de entrada**: Sanitización y validación de datos
- **CORS configurado**: Control de acceso entre dominios
- **Guardias de autenticación**: Protección de rutas sensibles
- **Validación de MongoDB IDs**: Pipes personalizados para validar IDs

## Estructura de Base de Datos

### Colección de Usuarios
- Campos de autenticación (email, password)
- Información de perfil
- Timestamps de creación y actualización

### Colección de Categorías
- Nombre y descripción
- Estructura jerárquica
- Relaciones con productos

### Colección de Productos
- Información completa del producto
- Relación con categorías
- Precios y disponibilidad

### Colección de Pedidos
- Información del cliente
- Lista de productos
- Estado del pedido
- Timestamps

## Despliegue

### Despliegue Local

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Configurar variables de entorno
4. Ejecutar: `npm run start:prod`

### Despliegue en Producción

Para desplegar en producción, considera:

1. **Variables de entorno**: Configurar todas las variables necesarias
2. **Base de datos**: Usar MongoDB Atlas o instancia de producción
3. **Puerto**: Configurar puerto apropiado para producción
4. **SSL**: Configurar certificados SSL si es necesario
5. **Logs**: Configurar sistema de logs
6. **Monitoreo**: Implementar monitoreo de la aplicación

### Docker (Opcional)

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "start:prod"]
```

## Solución de Problemas

### Problemas Comunes

1. **Error de conexión a MongoDB**
   - Verificar la URL de conexión
   - Comprobar credenciales
   - Verificar que MongoDB esté ejecutándose

2. **Error de autenticación JWT**
   - Verificar que JWT_SECRET esté configurado
   - Comprobar que el token no haya expirado
   - Verificar formato del header Authorization

3. **Error de validación**
   - Revisar los DTOs
   - Verificar que los datos de entrada cumplan con las validaciones

### Logs y Debugging

```bash
# Modo debug
npm run start:debug

# Ver logs detallados
DEBUG=* npm run start:dev
```

## Contribución

1. Hacer fork del repositorio
2. Crear tu rama de características (`git checkout -b feature/nueva-caracteristica`)
3. Hacer commit de tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Hacer push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abrir un Pull Request

### Guías de Contribución

- Seguir las convenciones de código existentes
- Agregar pruebas para nuevas funcionalidades
- Actualizar documentación cuando sea necesario
- Usar commits descriptivos

## Licencia

Este proyecto está bajo licencia [MIT](LICENSE).

## Soporte

Para soporte y preguntas:
- Visita la [Documentación de NestJS](https://docs.nestjs.com)
- Únete a nuestro [canal de Discord](https://discord.gg/G7Qnnhy)
- Revisa los [cursos de NestJS](https://courses.nestjs.com/)

## Mantente en Contacto

- Autor - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Sitio Web - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)
