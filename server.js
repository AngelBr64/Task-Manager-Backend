const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Fixed the variable name here

const app = express();
const PORT = process.env.PORT || 5000; // Better to use environment variable

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

app.use(cors(corsOptions));
app.use(express.json());

// Routes - only need one line since you're importing as authRoutes
app.use('/api', authRoutes); // Removed the trailing slash for consistency

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});