<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import DataState from '@/components/ui/DataState.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import EducationItem from '@/components/education/EducationItem.vue'
import { useResource } from '@/composables/useResource'

const { items, status, reload } = useResource('education')

const isInProgress = (entry) => /sekarang|present|\(now\)/i.test(entry.period ?? '')
</script>

<template>
  <section id="education" class="section relative bg-raised/60">
    <div class="shell">
      <SectionTitle
        eyebrow="Education"
        title="Learning path"
        lead="My schooling from primary school to university, including the study focus I am working on now."
      />

      <div class="mx-auto mt-12 max-w-3xl">
        <DataState :status="status" empty-text="No education data yet." @retry="reload">
          <ol class="relative border-l border-hair pl-0">
            <EducationItem
              v-for="(entry, index) in items"
              :key="entry.id"
              v-reveal="index * 60"
              :entry="entry"
              :latest="isInProgress(entry)"
            />
          </ol>
        </DataState>
      </div>
    </div>
  </section>
</template>
