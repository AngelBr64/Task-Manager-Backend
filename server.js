require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; // Railway asigna dinámicamente

// Configurar CORS correctamente
app.use(cors({
  origin: "https://task-manager-frontend-five-chi.vercel.app", // Tu frontend en Vercel
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());

// Importar y usar rutas
try {
  const authRoutes = require('./routes/authRoutes');
  app.use('/api/', authRoutes);
} catch (error) {
  console.error("❌ Error al cargar las rutas:", error);
}

// Manejo de errores para evitar que Railway lo cierre inesperadamente
app.use((err, req, res, next) => {
  console.error("⚠️ Error en el servidor:", err);
  res.status(500).json({ error: "Error interno del servidor" });
});

// Capturar errores inesperados y evitar que el servidor se caiga
process.on('uncaughtException', (err) => {
  console.error("❌ Error no capturado:", err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error("❌ Promesa rechazada no manejada:", reason);
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
}).on('error', (err) => {
  console.error('❌ Error al iniciar el servidor:', err);
});
