const express = require('express');
const cors = require('cors');
const path = require('path');

// Importación absoluta para evitar errores
const authRoutes = require(path.join(__dirname, 'routes', 'authRoutes'));

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración CORS más flexible para desarrollo
app.use(cors({
  origin: true, // Permite todos los orígenes (ajustar en producción)
  credentials: true
}));

app.use(express.json());

// Ruta de prueba inicial
app.get('/', (req, res) => {
  res.send('API Funcionando');
});

// Rutas API
app.use('/api', authRoutes);

// Manejo de errores mejorado
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message || 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});