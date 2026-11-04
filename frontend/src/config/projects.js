// src/config/projects.js
/** Peta status proyek ke tone badge — dipakai kartu dan detail modal. */
export const STATUS_TONES = {
  Live: 'success',
  Completed: 'success',
  'In Progress': 'warn',
  'In Development': 'warn',
}

export function statusTone(status) {
  return STATUS_TONES[status] ?? 'neutral'
}
