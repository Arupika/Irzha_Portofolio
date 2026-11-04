<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed, ref } from 'vue'
import DataState from '@/components/ui/DataState.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectDetailModal from '@/components/projects/ProjectDetailModal.vue'
import { useResource } from '@/composables/useResource'

const { items, status, reload } = useResource('projects')

const filter = ref('All')
const selected = ref(null)

/** Daftar filter diturunkan dari data, bukan ditulis manual di template. */
const filters = computed(() => [
  'All',
  ...new Set(items.value.flatMap((project) => project.categories ?? [])),
])

const visible = computed(() =>
  filter.value === 'All'
    ? items.value
    : items.value.filter((project) => (project.categories ?? []).includes(filter.value)),
)

const viewStatus = computed(() =>
  status.value === 'ready' && visible.value.length === 0 ? 'empty' : status.value,
)
</script>

<template>
  <section id="projects" class="section relative bg-raised/60">
    <div class="glow right-[-6%] top-1/4 h-72 w-72 bg-brand/15"></div>

    <div class="shell">
      <SectionTitle
        eyebrow="Featured Work"
        title="Projects I built end to end"
        lead="Case studies of real applications — architecture, integrations, and what is already shipped versus still in progress."
      />

      <div
        class="mt-10 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        <button
          v-for="option in filters"
          :key="option"
          type="button"
          :aria-pressed="filter === option"
          :class="[
            'rounded-xl border px-4 py-2 text-sm font-semibold transition duration-300',
            filter === option
              ? 'border-brand/50 bg-brand/15 text-brand-light'
              : 'border-hair bg-card text-dim hover:border-brand/40 hover:text-bright',
          ]"
          @click="filter = option"
        >
          {{ option }}
        </button>
      </div>

      <DataState
        :status="viewStatus"
        class="mt-10"
        empty-text="No project in this category yet."
        @retry="reload"
      >
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ProjectCard
            v-for="(project, index) in visible"
            :key="project.id"
            v-reveal="index * 70"
            :project="project"
            @open="selected = project"
          />
        </div>
      </DataState>
    </div>

    <ProjectDetailModal :project="selected" @close="selected = null" />
  </section>
</template>
