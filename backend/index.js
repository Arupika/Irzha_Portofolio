// backend/index.js
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects, certificates } = require('./data.js');

const app = express();
app.use(cors());

app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/certificates', (req, res) => {res.json(certificates);});

// Baris ini penting agar Vercel bisa menjalankan backend Anda
module.exports = app;