// src/directives/reveal.js
import { prefersReducedMotion } from '@/utils/motion'

const observer = new IntersectionObserver(
  (entries, io) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      io.unobserve(entry.target)
    })
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
)

/**
 * v-reveal — munculkan elemen saat masuk viewport.
 * Opsi angka untuk stagger: v-reveal="120" (delay ms).
 */
export default {
  mounted(el, { value }) {
    // Tanpa IntersectionObserver (atau saat animasi dikurangi), konten langsung terlihat.
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined' || value === false) {
      el.classList.add('is-visible')
      return
    }
    el.classList.add('reveal')
    if (typeof value === 'number') el.style.setProperty('--reveal-delay', `${value}ms`)
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
