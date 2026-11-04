<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  slug: { type: String, default: null }, // key devicons, mis. "vuejs"
  name: { type: String, required: true },
})

const failed = ref(false)
watch(
  () => props.slug,
  () => (failed.value = false),
)

const src = computed(() =>
  props.slug && !failed.value
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.slug}/${props.slug}-original.svg`
    : null,
)

const initials = computed(() => props.name.slice(0, 2).toUpperCase())
</script>

<template>
  <img
    v-if="src"
    :src="src"
    :alt="props.name"
    class="h-full w-full object-contain"
    loading="lazy"
    decoding="async"
    @error="failed = true"
  />
  <span v-else class="grid h-full w-full place-items-center font-mono text-xs font-bold text-dim">
    {{ initials }}
  </span>
</template>
