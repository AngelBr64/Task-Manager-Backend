// backend/server.js
const express = require('express');
const cors = require('cors');
const Routes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/', Routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
