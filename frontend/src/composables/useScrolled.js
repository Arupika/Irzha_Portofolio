// src/composables/useScrolled.js
import { onBeforeUnmount, onMounted, ref } from 'vue'

/** True setelah halaman digulir melewati ambang — dipakai untuk blur navbar. */
export function useScrolled(threshold = 12) {
  const scrolled = ref(false)

  function onScroll() {
    scrolled.value = window.scrollY > threshold
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

  return { scrolled }
}
