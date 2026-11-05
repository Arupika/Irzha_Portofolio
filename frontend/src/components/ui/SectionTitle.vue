<script setup>
defineProps({
  eyebrow: { type: String, default: null },
  title: { type: String, required: true },
  lead: { type: String, default: null },
  align: { type: String, default: 'center' }, // center | left
})
</script>

<template>
  <header :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <p v-if="eyebrow" class="eyebrow mb-3">{{ eyebrow }}</p>
    <h2 class="section-title">{{ title }}</h2>
    <div
      v-if="align === 'center'"
      class="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-violet"
    />
    <p v-if="lead" class="mt-5 whitespace-pre-line text-base leading-relaxed text-dim md:text-lg">{{ lead }}</p>
  </header>
</template>
