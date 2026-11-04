<script setup>
import AppButton from './AppButton.vue'
import IconBase from './IconBase.vue'

defineProps({
  status: { type: String, required: true }, // loading | error | empty | ready
  emptyText: { type: String, default: 'Nothing to show yet.' },
})

defineEmits(['retry'])
</script>

<template>
  <div>
    <div
      v-if="status === 'loading'"
      class="card flex min-h-40 items-center justify-center gap-3 p-8"
      role="status"
    >
      <span class="h-5 w-5 animate-spin rounded-full border-2 border-hair border-t-brand"></span>
      <p class="text-sm text-dim">Loading data…</p>
    </div>

    <div
      v-else-if="status === 'error'"
      class="card flex min-h-40 flex-col items-center gap-4 p-8 text-center"
    >
      <span class="h-7 w-7 text-violet-light">
        <IconBase name="alert" />
      </span>
      <p class="max-w-md text-sm text-dim">
        This data could not be loaded. Check the API connection, then try again.
      </p>
      <AppButton variant="secondary" icon="arrowRight" @click="$emit('retry')">Try again</AppButton>
    </div>

    <div v-else-if="status === 'empty'" class="card min-h-40 p-8 text-center text-sm text-dim">
      {{ emptyText }}
    </div>

    <slot v-else />
  </div>
</template>
