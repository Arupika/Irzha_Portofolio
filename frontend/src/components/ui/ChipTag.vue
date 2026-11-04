<script setup>
const props = defineProps({
  label: { type: String, required: true },
  tone: { type: String, default: 'brand' }, // brand | neutral | success | warn
})

const tones = {
  brand: 'border-brand/25 bg-brand/10 text-brand-light',
  neutral: 'border-hair bg-raised text-dim',
  success: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300',
  warn: 'border-violet/30 bg-violet/10 text-violet-light',
}
</script>

<template>
  <span :class="['chip', tones[props.tone]]">{{ props.label }}</span>
</template>
