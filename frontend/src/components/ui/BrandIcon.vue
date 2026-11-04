<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: true },
})

/** Logo merek diambil dari set ikon yang sama dengan ikon teknologi (simple-icons CDN). */
const src = computed(() => `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${props.name}.svg`)
</script>

<template>
  <img :src="src" :alt="props.label" class="h-full w-full object-contain" loading="lazy" />
</template>
