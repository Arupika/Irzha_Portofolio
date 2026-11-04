<script setup>
import ChipTag from '@/components/ui/ChipTag.vue'
import IconBase from '@/components/ui/IconBase.vue'
import ThumbImage from '@/components/ui/ThumbImage.vue'
import ProjectLinks from './ProjectLinks.vue'
import { statusTone } from '@/config/projects'

const props = defineProps({
  project: { type: Object, required: true },
})

defineEmits(['open'])

const caption = props.project.title
  .split(/\s+/)
  .slice(0, 2)
  .map((word) => word[0]?.toUpperCase() ?? '')
  .join('')
</script>

<template>
  <article
    class="card group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:border-brand/40"
  >
    <div class="relative h-52 overflow-hidden border-b border-hair">
      <div class="h-full w-full transition duration-500 group-hover:scale-[1.04]">
        <ThumbImage :src="props.project.image" :alt="props.project.title" :caption="caption" />
      </div>
      <div class="absolute left-3 top-3 flex gap-2">
        <ChipTag
          v-for="category in props.project.categories"
          :key="category"
          :label="category"
          tone="brand"
        />
        <ChipTag
          v-if="props.project.status"
          :label="props.project.status"
          :tone="statusTone(props.project.status)"
        />
      </div>
    </div>

    <div class="flex flex-1 flex-col p-5 md:p-6">
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-lg font-bold leading-snug text-bright md:text-xl">
          {{ props.project.title }}
        </h3>
        <span v-if="props.project.period" class="shrink-0 pt-1 font-mono text-xs text-dim/70">
          {{ props.project.period }}
        </span>
      </div>

      <p
        v-if="props.project.tagline"
        class="mt-1 text-xs font-medium uppercase tracking-widest text-brand-light/80"
      >
        {{ props.project.tagline }}
      </p>

      <p class="mt-3 line-clamp-3 text-sm leading-relaxed text-dim">
        {{ props.project.description }}
      </p>

      <ul class="mt-4 flex flex-wrap gap-2">
        <li v-for="tech in props.project.tech.slice(0, 5)" :key="tech">
          <ChipTag :label="tech" tone="neutral" />
        </li>
        <li v-if="props.project.tech.length > 5" class="chip border-transparent text-dim/70">
          +{{ props.project.tech.length - 5 }}
        </li>
      </ul>

      <div class="mt-5 flex flex-1 items-end justify-between gap-3 border-t border-hair pt-4">
        <ProjectLinks :project="props.project" :show-empty-note="false" />
        <button
          type="button"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light transition group-hover:gap-2.5"
          :aria-label="`View details of ${props.project.title}`"
          @click="$emit('open', props.project)"
        >
          Details
          <span class="h-4 w-4"><IconBase name="arrowRight" /></span>
        </button>
      </div>
    </div>
  </article>
</template>
