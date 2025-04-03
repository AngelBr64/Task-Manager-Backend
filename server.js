// backend/server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

const allowedOrigins = [
  'https://task-manager-frontend-five-chi.vercel.app',
  'http://localhost:3000' // Add other environments as needed
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // Required when using withCredentials
};

app.use(cors(corsOptions));
app.use(express.json());

// Rutas
app.use('/api/', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});