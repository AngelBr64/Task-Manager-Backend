const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Make sure this path is correct

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'https://task-manager-frontend-five-chi.vercel.app',
  'http://localhost:3000'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api', authRoutes); // Using the imported authRoutes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});