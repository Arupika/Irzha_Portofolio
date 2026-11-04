const { Router } = require('express')
const { educationHistory, skills, projects, certificates } = require('../data.js')

const router = Router()

/**
 * Kontrak respons dipertahankan seperti sebelumnya: setiap endpoint mengembalikan array JSON langsung.
 * Menambah resource baru cukup taruh entri di bawah — route-nya dibuat data-driven.
 */
const resources = {
  education: educationHistory,
  skills,
  projects,
  certificates,
}

Object.entries(resources).forEach(([name, rows]) => {
  router.get(`/${name}`, (req, res) => {
    res.json(rows)
  })
})

router.get('/', (req, res) => {
  res.json({
    name: 'Irzha Portfolio API',
    endpoints: Object.keys(resources).map((name) => `/api/${name}`),
  })
})

module.exports = router
