const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000; // Railway asigna un puerto dinámico

// ✅ Configurar CORS correctamente
app.use(cors({
  origin: "https://task-manager-frontend-five-chi.vercel.app", // Permitir solo tu frontend
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

// ✅ Manejar preflight requests (CORS)
app.options('*', cors());

// ✅ Middleware global para CORS (por si alguna respuesta no lo tiene)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://task-manager-frontend-five-chi.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  
  // Manejar preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  
  next();
});

// ✅ Middleware para JSON
app.use(express.json());

// ✅ Rutas
app.use('/api', authRoutes);

// ✅ Manejo de errores global
app.use((err, req, res, next) => {
  console.error("⚠️ Error en el servidor:", err);
  res.status(500).json({ error: "Error interno del servidor" });
});

// ✅ Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
