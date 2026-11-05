<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
})

/**
 * Logo merek diambil dari set ikon yang sama dengan ikon teknologi (simple-icons CDN).
 * Dirender sebagai mask, bukan <img>, supaya warnanya mengikuti `currentColor`
 * induknya. Dengan begitu logo hitam bawaan simple-icons tetap kontras di latar gelap
 * dan otomatis ikut berubah saat state hover.
 */
const iconUrl = computed(
  () => `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${props.name}.svg`,
)
</script>

<template>
  <span
    role="img"
    :aria-label="props.label"
    class="brand-icon block h-full w-full"
    :style="{ maskImage: `url(${iconUrl})`, WebkitMaskImage: `url(${iconUrl})` }"
  ></span>
</template>

<style scoped>
.brand-icon {
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
}
</style>
