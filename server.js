const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

// Configuración CORS
const corsOptions = {
  origin: 'https://task-manager-frontend-five-chi.vercel.app',  // La URL de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Los métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],  // Los encabezados permitidos
  credentials: true,  // Si tu aplicación maneja cookies o credenciales
};

app.use(cors(corsOptions));  // Aplica la configuración CORS
app.use(express.json());

// Rutas
app.use('/api/', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
