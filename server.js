const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000; // Railway asigna un puerto dinámico

// Configurar CORS correctamente
app.use(cors({
  origin: "https://task-manager-frontend-five-chi.vercel.app", // Permitir solo tu frontend
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());

// Rutas
app.use('/api/', authRoutes);

// Manejo de errores para evitar que el servidor se caiga
app.use((err, req, res, next) => {
  console.error("⚠️ Error en el servidor:", err);
  res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
