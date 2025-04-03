const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; // Railway asigna un puerto dinámico

// Configurar CORS correctamente
app.use(cors({
  origin: "https://task-manager-frontend-five-chi.vercel.app", // Tu frontend en Vercel
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());

// Importar y usar rutas
const authRoutes = require('./routes/authRoutes');
app.use('/api/', authRoutes);

// Manejo de errores para evitar que Railway lo cierre inesperadamente
app.use((err, req, res, next) => {
  console.error("Error en el servidor:", err);
  res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
}).on('error', (err) => {
  console.error('❌ Error al iniciar el servidor:', err);
});
