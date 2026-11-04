// src/services/api.js
import axios from 'axios'

/**
 * Satu konfigurasi API untuk seluruh aplikasi.
 * VITE_API_URL berisi origin backend (tanpa /api); di produksi diset di dashboard Vercel.
 */
const origin = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/+$/, '')

const http = axios.create({
  baseURL: `${origin}/api`,
  timeout: 10_000,
})

/** Ambil satu sumber daya REST (education, skills, projects, certificates). */
export async function fetchResource(name) {
  const { data } = await http.get(`/${name}`)
  return Array.isArray(data) ? data : []
}
