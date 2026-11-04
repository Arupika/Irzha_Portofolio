<script setup>
import { computed } from 'vue'
import { ICONS } from '@/config/icons'

const props = defineProps({
  name: { type: String, required: true },
  title: { type: String, default: null },
})

const icon = computed(() => ICONS[props.name] ?? ICONS.sparkles)
</script>

<template>
  <svg
    class="h-full w-full"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    :role="props.title ? 'img' : undefined"
    :aria-hidden="props.title ? undefined : 'true'"
  >
    <path v-for="d in icon.paths" :key="d" :d="d" />
  </svg>
</template>
