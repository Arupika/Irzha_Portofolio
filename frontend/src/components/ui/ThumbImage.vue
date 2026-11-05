<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  src: { type: String, default: null },
  alt: { type: String, required: true },
  caption: { type: String, default: '' },
})

const failed = ref(false)
watch(
  () => props.src,
  () => (failed.value = false),
)

// Placeholder elegan dipakai saat berkas gambar belum tersedia (mis. screenshot proyek internal).
const isPlaceholder = computed(() => !props.src || failed.value)
</script>

<template>
  <div
    v-if="isPlaceholder"
    class="flex h-full w-full items-center justify-center bg-gradient-to-br from-raised via-card to-night"
    role="img"
    :aria-label="props.alt"
  >
    <div class="text-center">
      <p class="font-mono text-3xl font-bold tracking-tight text-brand/70">
        {{ props.caption || 'IMG' }}
      </p>
      <p class="mt-2 text-xs uppercase tracking-eyebrow text-dim/60">Preview coming soon</p>
    </div>
  </div>
  <img
    v-else
    :src="props.src"
    :alt="props.alt"
    class="h-full w-full object-cover"
    loading="lazy"
    decoding="async"
    @error="failed = true"
  />
</template>
