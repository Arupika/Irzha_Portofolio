<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import CertificateCard from '@/components/certificates/CertificateCard.vue'
import DataState from '@/components/ui/DataState.vue'
import IconBase from '@/components/ui/IconBase.vue'
import ModalDialog from '@/components/ui/ModalDialog.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ThumbImage from '@/components/ui/ThumbImage.vue'
import { useResource } from '@/composables/useResource'

const { items, status, reload } = useResource('certificates')
const preview = ref(null)
</script>

<template>
  <section id="certificates" class="section relative">
    <div class="glow right-1/4 top-1/2 h-64 w-64 bg-brand/15"></div>

    <div class="shell">
      <SectionTitle
        eyebrow="Certificates"
        title="Credentials & coursework"
        lead="Certifications I have completed. The list is read from the API, so adding a certificate only means adding one entry in the backend."
      />

      <div class="mt-12">
        <DataState :status="status" empty-text="No certificates published yet." @retry="reload">
          <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <CertificateCard
              v-for="(certificate, index) in items"
              :key="certificate.id"
              v-reveal="index * 70"
              :certificate="certificate"
              @preview="preview = certificate"
            />
          </div>
        </DataState>
      </div>
    </div>

    <ModalDialog
      :open="Boolean(preview)"
      :title="preview?.title ?? ''"
      size="xl"
      @close="preview = null"
    >
      <div v-if="preview">
        <div class="card max-h-[58vh] overflow-auto bg-night p-2">
          <ThumbImage :src="preview.image" :alt="preview.title" caption="CERT" />
        </div>

        <div class="mt-5 flex flex-wrap items-center justify-between gap-4">
          <p class="flex items-start gap-2 text-sm text-dim">
            <span class="mt-0.5 h-4 w-4 shrink-0 text-brand-light"
              ><IconBase name="graduation"
            /></span>
            <span>
              Issued by <span class="font-semibold text-bright">{{ preview.issuer }}</span>
              <template v-if="preview.year"> · {{ preview.year }}</template>
            </span>
          </p>
          <AppButton v-if="preview.link" :href="preview.link" icon="external"
            >View Certificate</AppButton
          >
        </div>
      </div>
    </ModalDialog>
  </section>
</template>
