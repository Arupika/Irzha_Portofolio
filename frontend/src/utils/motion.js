// src/utils/motion.js
/** Penghenti animasi global: hormati preferensi OS pengguna. */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
