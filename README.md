# 📰 Frontend Challenge - News App

Este proyecto es una aplicación de noticias construida con **React + TypeScript**, utilizando **Material UI** para la interfaz, y consumiendo una API REST construida en **.NET 6**.

## 🚀 Características

- Listado paginado de noticias
- Búsqueda por título, autor o contenido
- Detalle de cada noticia
- Crear, editar y eliminar noticias
- Responsive y optimizado para mobile
- Dockerfile incluido para despliegue del backend

## 🛠️ Tecnologías

### Frontend
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [Formik + Yup](https://formik.org/)
- React Router DOM

### Backend
- .NET 6 (API REST)
- Entity Framework Core
- PostgreSQL
- Docker

## 📁 Estructura del Proyecto

frontend-challenge/
├── src/
│ ├── components/ # Componentes reutilizables
│ ├── interfaces/ # Interfaces TypeScript
│ ├── services/ # Conexión con la API
│ ├── views/ # Vistas principales (Home, etc.)
│ ├── App.tsx
│ └── index.tsx
├── Dockerfile # (para el backend)
├── .env
├── package.json
└── tsconfig.json

bash
Copiar
Editar

## 🧪 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/frontend-challenge.git
cd frontend-challenge

# Instalar dependencias
npm install

# Ejecutar el frontend
npm run dev
Asegurate de que el backend esté corriendo en http://localhost:5000.

⚙️ Variables de Entorno
Crear un archivo .env en la raíz del proyecto con:

bash
Copiar
Editar
REACT_APP_API_URL=http://localhost:5000/api

🐳 Docker Compose
⚠️ Primero ejecutá el backend con su docker-compose.yml. Asegurate que expone el puerto 5000.

bash
Copiar
Editar
# Desde la carpeta del backend
docker-compose up -d
Luego, en el frontend:

bash
Copiar
Editar
# Desde la carpeta del frontend
docker-compose up --build
Esto iniciará el frontend en: http://localhost:3000

El frontend se conectará automáticamente a http://localhost:5000/api usando la variable de entorno REACT_APP_API_URL.
