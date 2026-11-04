// src/composables/useResource.js
import { onMounted, ref } from 'vue'
import { fetchResource } from '@/services/api'

/**
 * Muat satu sumber daya API sekali saat komponen dipasang.
 * Dipakai Education, Skills, Projects, dan Certificates — tidak ada lagi duplikasi axios/try-catch.
 */
export function useResource(name) {
  const items = ref([])
  const status = ref('loading') // loading | ready | error

  async function load() {
    status.value = 'loading'
    try {
      items.value = await fetchResource(name)
      status.value = 'ready'
    } catch (err) {
      console.warn(`Gagal mengambil data ${name}:`, err?.message ?? err)
      status.value = 'error'
    }
  }

  onMounted(load)

  return { items, status, reload: load }
}
