# MetNet - Task Management Application

Sistema de gestión de tareas con arquitectura Frontend/Backend separada.

## 🚀 Instrucciones para correr el proyecto

### Pre-requisitos

- Node.js (v18 o superior)
- npm

### Backend (API REST)

```bash
cd backend
npm install
npm run db:init    # Inicializar base de datos con datos de prueba
npm start          # Servidor en http://localhost:3000
```

### Frontend (Vue.js)

```bash
cd frontend
npm install
npm run dev        # Aplicación en http://localhost:5173
```

## 🏗️ Decisiones Técnicas

### Backend

- **Node.js + Express**: API REST ligera y escalable
- **TypeScript**: Tipado estático para mayor robustez
- **SQLite + better-sqlite3**: Base de datos embebida, ideal para desarrollo y testing
- **Zod**: Validación de datos de entrada con esquemas tipados
- **CORS**: Habilitado para comunicación frontend-backend en desarrollo

### Frontend

- **Vue 3 + Composition API**: Framework reactivo moderno con mejor performance
- **TypeScript**: Consistencia de tipos entre frontend y backend
- **Vite**: Build tool rápido con HMR optimizado
- **Tailwind CSS**: Utility-first CSS para desarrollo ágil de UI
- **Arquitectura por capas**: Separación clara entre servicios, componentes y páginas

### Estructura del Proyecto

```
MetNet/
├── backend/           # API REST
│   ├── controllers/   # Lógica de negocio
│   ├── routes/        # Definición de endpoints
│   ├── model/         # Modelos de datos
│   ├── db/            # Base de datos SQLite
│   └── schema/        # Validaciones Zod
├── frontend/          # Aplicación Vue.js
│   ├── src/components/# Componentes reutilizables
│   ├── src/pages/     # Vistas principales
│   ├── src/services/  # Comunicación con API
│   └── src/types/     # Definiciones TypeScript
```

### API Endpoints

- `GET /api/v1/tasks` - Obtener todas las tareas
- `POST /api/v1/tasks` - Crear nueva tarea
- `PUT /api/v1/tasks/:id` - Actualizar tarea
- `DELETE /api/v1/tasks/:id` - Eliminar tarea

### Características

- ✅ CRUD completo de tareas
- ✅ Validación de datos en backend y frontend
- ✅ Interfaz responsive con Tailwind CSS
- ✅ Tipado estático completo con TypeScript
- ✅ Base de datos inicializada con datos de prueba
