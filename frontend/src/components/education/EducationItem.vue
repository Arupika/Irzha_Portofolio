<script setup>
import ChipTag from '@/components/ui/ChipTag.vue'

defineProps({
  entry: { type: Object, required: true },
  latest: { type: Boolean, default: false },
})
</script>

<template>
  <li class="relative pb-8 pl-10 last:pb-0">
    <span
      :class="[
        'absolute -left-3.5 top-1 grid h-7 w-7 place-items-center rounded-full border bg-card',
        latest ? 'border-brand/60 shadow-glow' : 'border-hair',
      ]"
      aria-hidden="true"
    >
      <span :class="['h-2 w-2 rounded-full', latest ? 'bg-brand' : 'bg-hair']"></span>
    </span>

    <div class="card p-5 transition duration-300 hover:border-brand/40">
      <div class="flex flex-wrap items-center gap-2">
        <ChipTag :label="entry.period" :tone="latest ? 'brand' : 'neutral'" />
        <span
          v-if="latest"
          class="text-[11px] font-semibold uppercase tracking-widest text-brand-light/80"
        >
          In progress
        </span>
      </div>
      <h3 class="mt-3 text-base font-bold text-bright md:text-lg">{{ entry.institution }}</h3>
      <p class="mt-1 text-sm font-medium text-dim">{{ entry.major }}</p>
      <p v-if="entry.description" class="mt-2 text-sm leading-relaxed text-dim/80">
        {{ entry.description }}
      </p>
    </div>
  </li>
</template>
