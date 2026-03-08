// backend/index.js
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects, certificates } = require('./data.js');

const app = express();
app.use(cors({
  origin: "https://irzha-portofolio.vercel.app", // Ganti dengan URL frontend Vercel kamu
  methods: ["GET", "POST"]
}));

// Route API
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/certificates', (req, res) => res.json(certificates));

// --- TAMBAHKAN KODE DI BAWAH INI ---
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server nyala di http://localhost:${PORT}`);
});

// Tetap simpan ini untuk kebutuhan Vercel nanti
module.exports = app;