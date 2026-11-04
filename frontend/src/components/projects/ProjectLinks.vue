<script setup>
import AppButton from '@/components/ui/AppButton.vue'
import BrandIcon from '@/components/ui/BrandIcon.vue'
import IconBase from '@/components/ui/IconBase.vue'

const props = defineProps({
  project: { type: Object, required: true },
  size: { type: String, default: 'sm' }, // sm | md
  showEmptyNote: { type: Boolean, default: true },
})

const compact = { sm: 'px-3 py-2 text-xs', md: 'px-4 py-2.5 text-sm' }
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <AppButton
      v-if="props.project.repository"
      :href="props.project.repository"
      variant="secondary"
      :class="compact[props.size]"
    >
      <span class="h-4 w-4">
        <BrandIcon name="github" label="GitHub" />
      </span>
      Repository
    </AppButton>

    <AppButton
      v-if="props.project.liveDemo"
      :href="props.project.liveDemo"
      :class="compact[props.size]"
    >
      <span class="h-4 w-4"><IconBase name="external" /></span>
      Live Demo
    </AppButton>

    <p
      v-if="props.showEmptyNote && !props.project.repository && !props.project.liveDemo"
      class="text-xs text-dim/70"
    >
      Private project — repository and demo are not published.
    </p>
  </div>
</template>
