// backend/index.js
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const apiRoutes = require('./routes/api.js')

const app = express()

/**
 * CORS diatur satu kali lewat middleware cors.
 * Middleware manual yang menulis header Access-Control-* sengaja dihapus:
 * dulunya dua sumber menulis origin berbeda sehingga header dobel dan bentrok.
 */
const allowedOrigins = (
  process.env.CORS_ALLOWED_ORIGINS ??
  'https://irzha-portofolio.vercel.app,http://localhost:5173'
)
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 600,
  }),
)

app.get('/', (req, res) => {
  res.send('Irzha Portfolio API is running. See /api for available endpoints.')
})

app.use('/api', apiRoutes)

// Endpoint yang tidak dikenal → 404 JSON, bukan HTML default.
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', path: req.originalUrl })
})

// Handler error terpusat: respon seragam, stack trace tidak dibocorkan ke client.
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err)
  console.error(err)
  res.status(err.status || 500).json({ error: 'Internal Server Error' })
})

// Di Vercel serverless fungsi yang diekspor dipakai; listen hanya untuk dev lokal.
if (!process.env.VERCEL) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Server nyala di http://localhost:${port}`)
  })
}

module.exports = app
