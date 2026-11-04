<script setup>
import ChipTag from '@/components/ui/ChipTag.vue'
import IconBase from '@/components/ui/IconBase.vue'
import ModalDialog from '@/components/ui/ModalDialog.vue'
import ThumbImage from '@/components/ui/ThumbImage.vue'
import ProjectLinks from './ProjectLinks.vue'
import { statusTone } from '@/config/projects'

const props = defineProps({
  project: { type: Object, default: null },
})

defineEmits(['close'])

const groups = [
  { key: 'features', icon: 'check', title: 'Implemented Features' },
  { key: 'inDevelopment', icon: 'sparkles', title: 'In Development' },
  { key: 'highlights', icon: 'code', title: 'Technical Highlights' },
]
</script>

<template>
  <ModalDialog
    :open="Boolean(props.project)"
    :title="props.project?.title ?? ''"
    size="xl"
    @close="$emit('close')"
  >
    <div v-if="props.project" class="grid gap-6 md:grid-cols-5">
      <div class="md:col-span-2">
        <div class="card h-44 overflow-hidden md:h-56">
          <ThumbImage :src="props.project.image" :alt="props.project.title" />
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
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
          <ChipTag v-if="props.project.period" :label="props.project.period" tone="neutral" />
        </div>

        <p class="mt-5 text-xs uppercase tracking-widest text-dim/70">My Role</p>
        <p class="mt-1 text-sm font-semibold text-bright">{{ props.project.role }}</p>

        <div class="mt-5">
          <ProjectLinks :project="props.project" size="md" />
        </div>
      </div>

      <div class="space-y-6 md:col-span-3">
        <section>
          <h4 class="eyebrow mb-2">Overview</h4>
          <p class="text-sm leading-relaxed text-dim">{{ props.project.description }}</p>
        </section>

        <section v-if="props.project.contribution">
          <h4 class="eyebrow mb-2">My Contribution</h4>
          <p class="text-sm leading-relaxed text-dim">{{ props.project.contribution }}</p>
        </section>

        <section v-for="group in groups" :key="group.key">
          <template v-if="props.project[group.key]?.length">
            <h4 class="eyebrow mb-3">{{ group.title }}</h4>
            <ul class="space-y-2">
              <li
                v-for="item in props.project[group.key]"
                :key="item"
                class="flex items-start gap-2.5 text-sm leading-relaxed text-dim"
              >
                <span
                  :class="[
                    'mt-0.5 h-4 w-4 shrink-0',
                    group.icon === 'check' ? 'text-emerald-300' : 'text-violet-light',
                  ]"
                >
                  <IconBase :name="group.icon" />
                </span>
                {{ item }}
              </li>
            </ul>
          </template>
        </section>

        <section>
          <h4 class="eyebrow mb-3">Technology Stack</h4>
          <ul class="flex flex-wrap gap-2">
            <li v-for="tech in props.project.tech" :key="tech">
              <ChipTag :label="tech" tone="neutral" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  </ModalDialog>
</template>
