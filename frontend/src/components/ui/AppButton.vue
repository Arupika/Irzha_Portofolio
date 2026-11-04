<script setup>
import { computed } from 'vue'
import IconBase from './IconBase.vue'

const props = defineProps({
  variant: { type: String, default: 'primary' }, // primary | secondary | ghost
  href: { type: String, default: null },
  icon: { type: String, default: null },
  ariaLabel: { type: String, default: null },
  block: { type: Boolean, default: false },
})

const isLink = computed(() => Boolean(props.href))
const opensNewTab = computed(() => /^https?:\/\//.test(props.href ?? ''))
const classes = computed(() => ['btn', `btn-${props.variant}`, props.block && 'w-full'])
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :class="classes"
    :href="props.href"
    :target="opensNewTab ? '_blank' : undefined"
    :rel="opensNewTab ? 'noopener noreferrer' : undefined"
    :type="isLink ? undefined : 'button'"
    :aria-label="props.ariaLabel"
  >
    <slot />
    <span v-if="props.icon" class="h-4 w-4 shrink-0">
      <IconBase :name="props.icon" />
    </span>
  </component>
</template>
