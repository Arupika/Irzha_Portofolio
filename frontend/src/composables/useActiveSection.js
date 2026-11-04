// src/composables/useActiveSection.js
import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Tandai section yang sedang aktif lewat IntersectionObserver, dan bersihkan observer saat unmount.
 */
export function useActiveSection(ids, fallback = ids[0]) {
  const active = ref(fallback)
  let observer = null

  onMounted(() => {
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!targets.length) return

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length) active.value = visible[0].target.id
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    targets.forEach((target) => observer.observe(target))
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { active }
}
