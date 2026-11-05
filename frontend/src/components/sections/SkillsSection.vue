<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from 'vue'
import DataState from '@/components/ui/DataState.vue'
import IconBase from '@/components/ui/IconBase.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import TechIcon from '@/components/ui/TechIcon.vue'
import { useResource } from '@/composables/useResource'

const { items, status, reload } = useResource('skills')

const CATEGORY_ICONS = {
  Frontend: 'layout',
  Backend: 'server',
  Database: 'database',
  Tools: 'code',
}
const CATEGORY_ORDER = ['Frontend', 'Backend', 'Database', 'Tools']

/** Kelompokkan skill berdasarkan kategori dari API — urutan tetap, kategori baru ikut tampil. */
const groups = computed(() => {
  const buckets = new Map()
  items.value.forEach((skill) => {
    const key = skill.category || 'Other'
    if (!buckets.has(key)) buckets.set(key, [])
    buckets.get(key).push(skill)
  })
  const ordered = [
    ...CATEGORY_ORDER.filter((category) => buckets.has(category)),
    ...[...buckets.keys()].filter((category) => !CATEGORY_ORDER.includes(category)),
  ]
  return ordered.map((category) => ({
    category,
    icon: CATEGORY_ICONS[category] ?? 'sparkles',
    skills: buckets.get(category),
  }))
})
</script>

<template>
  <section id="skills" class="section relative">
    <div class="glow left-[-8%] top-1/3 h-72 w-72 bg-violet/15"></div>

    <div class="shell">
      <SectionTitle
        eyebrow="Technical Skills"
        title="The stack I actually use"
        lead="Grouped by layer — no subjective percentage bars, only the technologies I have actually shipped with."
      />

      <DataState
        :status="status"
        class="mt-12"
        empty-text="No skills published yet."
        @retry="reload"
      >
        <div class="grid gap-5 md:grid-cols-2">
          <article
            v-for="(group, index) in groups"
            :key="group.category"
            v-reveal="index * 60"
            class="card p-5 md:p-6"
          >
            <header class="mb-5 flex items-center gap-3">
              <span
                class="grid h-10 w-10 place-items-center rounded-xl border border-brand/25 bg-brand/10 p-2.5 text-brand-light"
              >
                <IconBase :name="group.icon" />
              </span>
              <h3 class="text-base font-bold text-bright md:text-lg">{{ group.category }}</h3>
              <span class="ml-auto font-mono text-xs text-dim/60">
                {{ String(group.skills.length).padStart(2, '0') }}
              </span>
            </header>

            <ul class="grid grid-cols-3 gap-3 sm:grid-cols-4">
              <li
                v-for="skill in group.skills"
                :key="skill.name"
                class="group flex flex-col items-center gap-2 rounded-xl border border-hair bg-raised/70 p-3 transition duration-300 hover:-translate-y-1 hover:border-brand/40"
              >
                <span
                  class="h-4 w-4 opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                >
                  <TechIcon :slug="skill.icon" :name="skill.name" />
                </span>
                <span
                  class="text-center text-[11px] font-semibold uppercase tracking-wide text-dim transition group-hover:text-brand-light"
                >
                  {{ skill.name }}
                </span>
              </li>
            </ul>
          </article>
        </div>
      </DataState>
    </div>
  </section>
</template>
