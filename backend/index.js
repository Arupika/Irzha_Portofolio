// backend/index.js
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects, certificates } = require('./data.js');

const app = express();

// 1. Perbaikan CORS: Tambahkan konfigurasi yang lebih detail
app.use(cors({
  origin: ["https://irzha-portofolio.vercel.app", "http://localhost:5173"], 
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 2. Middleware Tambahan (Sangat Penting untuk Vercel)
// Ini untuk memastikan header Access-Control benar-benar terkirim
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://irzha-portofolio.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  // Tangani preflight request (OPTIONS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// Route API
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/certificates', (req, res) => res.json(certificates));

// Root route untuk cek apakah backend hidup
app.get('/', (req, res) => {
  res.send('Backend Hall of Code is Running!');
});

// 3. Perbaikan app.listen (Agar tidak bentrok di Production)
if (process.env.NODE_ENV !== 'production') {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server nyala di http://localhost:${PORT}`);
  });
}

// WAJIB: Untuk Vercel Serverless
module.exports = app;