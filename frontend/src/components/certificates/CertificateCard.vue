<script setup>
import ChipTag from '@/components/ui/ChipTag.vue'
import IconBase from '@/components/ui/IconBase.vue'
import ThumbImage from '@/components/ui/ThumbImage.vue'

defineProps({
  certificate: { type: Object, required: true },
})

defineEmits(['preview'])
</script>

<template>
  <article
    class="card group overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:border-brand/40"
  >
    <button
      type="button"
      class="relative block h-52 w-full overflow-hidden border-b border-hair"
      :aria-label="`Preview ${certificate.title}`"
      @click="$emit('preview', certificate)"
    >
      <div class="h-full w-full transition duration-500 group-hover:scale-[1.04]">
        <ThumbImage :src="certificate.image" :alt="certificate.title" caption="CERT" />
      </div>
      <span
        class="absolute inset-0 flex items-end justify-center bg-night/70 opacity-0 transition duration-300 group-hover:opacity-100"
      >
        <span
          class="mb-4 inline-flex items-center gap-2 rounded-lg border border-hair bg-card px-3 py-1.5 text-xs font-semibold text-bright"
        >
          <span class="h-4 w-4"><IconBase name="external" /></span>
          View certificate
        </span>
      </span>
    </button>

    <div class="p-5">
      <h3 class="text-base font-bold leading-snug text-bright md:text-lg">
        {{ certificate.title }}
      </h3>
      <p class="mt-1 text-sm text-dim">{{ certificate.issuer }}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        <ChipTag v-if="certificate.year" :label="String(certificate.year)" tone="neutral" />
        <ChipTag v-if="certificate.credentialId" label="Verified" tone="success" />
      </div>
    </div>
  </article>
</template>
