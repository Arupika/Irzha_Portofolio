// src/composables/useTypewriter.js
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { prefersReducedMotion } from '@/utils/motion'

/**
 * Efek ketik berputar untuk beberapa kata. Timer selalu dibersihkan saat unmount.
 */
export function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 35, hold = 1800 } = {}) {
  const text = ref('')
  let wordIndex = 0
  let charIndex = 0
  let deleting = false
  let timer = null

  function tick() {
    const word = words[wordIndex]
    charIndex += deleting ? -1 : 1
    text.value = word.slice(0, charIndex)

    if (!deleting && charIndex === word.length) {
      deleting = true
      timer = setTimeout(tick, hold)
      return
    }
    if (deleting && charIndex === 0) {
      deleting = false
      wordIndex = (wordIndex + 1) % words.length
      timer = setTimeout(tick, typeSpeed)
      return
    }
    timer = setTimeout(tick, deleting ? deleteSpeed : typeSpeed)
  }

  onMounted(() => {
    if (prefersReducedMotion()) {
      text.value = words[0]
      return
    }
    tick()
  })

  onBeforeUnmount(() => clearTimeout(timer))

  return { text }
}
