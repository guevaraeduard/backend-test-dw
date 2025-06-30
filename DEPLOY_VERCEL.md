# Despliegue en Vercel

## Configuración del Proyecto

Este proyecto ya está configurado para desplegarse en Vercel. Los archivos necesarios son:

- `vercel.json` - Configuración de Vercel
- `api/index.ts` - Punto de entrada para Vercel
- `package.json` - Scripts de construcción

## Pasos para Desplegar

### 1. Instalar Vercel CLI (opcional)
```bash
npm i -g vercel
```

### 2. Desplegar desde GitHub (Recomendado)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Crea una cuenta o inicia sesión
4. Haz clic en "New Project"
5. Importa tu repositorio de GitHub
6. Vercel detectará automáticamente que es un proyecto Node.js
7. Haz clic en "Deploy"

### 3. Desplegar desde CLI

```bash
# En el directorio raíz del proyecto
vercel

# Para producción
vercel --prod
```

### 4. Variables de Entorno

En Vercel, configura las siguientes variables de entorno:

- `NODE_ENV=production`
- `MONGODB_URI` (tu conexión de MongoDB)

### 5. Configuración de MongoDB

Asegúrate de que tu base de datos MongoDB esté configurada para aceptar conexiones desde cualquier IP (0.0.0.0/0) o desde los dominios de Vercel.

## Estructura del Despliegue

- **API Routes**: Todas las rutas estarán disponibles en `/api/*`
- **CORS**: Configurado para aceptar peticiones desde cualquier origen
- **Puerto**: Vercel maneja automáticamente el puerto

## URLs de la API

Una vez desplegado, tu API estará disponible en:
- `https://tu-proyecto.vercel.app/api/*`

## Endpoints Disponibles

- `/api/auth/*` - Autenticación
- `/api/category/*` - Categorías
- `/api/product/*` - Productos
- `/api/files/*` - Archivos
- `/api/pedidos/*` - Pedidos

## Solución de Problemas

### Error de MongoDB
Si tienes problemas de conexión con MongoDB:
1. Verifica que tu cluster permita conexiones desde cualquier IP
2. Asegúrate de que las credenciales sean correctas
3. Considera usar variables de entorno para la conexión

### Error de Build
Si el build falla:
1. Verifica que todas las dependencias estén en `dependencies` (no en `devDependencies`)
2. Asegúrate de que el TypeScript compile correctamente
3. Revisa los logs de build en Vercel

### CORS Issues
Si tienes problemas de CORS:
1. Verifica la configuración en `api/index.ts`
2. Asegúrate de que el frontend esté usando la URL correcta de la API

## Comandos Útiles

```bash
# Ver logs de despliegue
vercel logs

# Ver información del proyecto
vercel ls

# Eliminar despliegue
vercel remove
``` 