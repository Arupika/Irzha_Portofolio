<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import IconBase from './IconBase.vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
  size: { type: String, default: 'lg' }, // lg | xl
})
const emit = defineEmits(['close'])

const panel = ref(null)
const titleId = computed(() => `dialog-title-${props.title.replace(/\W+/g, '-').toLowerCase()}`)
const sizes = { lg: 'max-w-3xl', xl: 'max-w-5xl' }

function onKeydown(event) {
  if (event.key === 'Escape') emit('close')
}

watch(
  () => props.open,
  async (open) => {
    if (open) {
      document.addEventListener('keydown', onKeydown)
      document.body.style.overflow = 'hidden'
      await nextTick()
      panel.value?.focus()
    } else {
      document.removeEventListener('keydown', onKeydown)
      document.body.style.overflow = ''
    }
  },
)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="props.open"
      class="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-night/80 p-4 backdrop-blur-sm animate-fade-in sm:p-6"
      @click.self="emit('close')"
    >
      <div
        ref="panel"
        :class="['card animate-fade-up my-auto w-full', sizes[props.size]]"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        tabindex="-1"
        @click.stop
      >
        <header class="flex items-start justify-between gap-4 border-b border-hair p-5 md:p-6">
          <slot name="header">
            <h3 :id="titleId" class="text-lg font-bold text-bright md:text-xl">
              {{ props.title }}
            </h3>
          </slot>
          <button
            type="button"
            class="rounded-lg border border-hair p-2 text-dim transition hover:border-brand/50 hover:text-bright"
            aria-label="Close dialog"
            @click="emit('close')"
          >
            <span class="block h-4 w-4"><IconBase name="close" /></span>
          </button>
        </header>

        <div class="p-5 md:p-6">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>
