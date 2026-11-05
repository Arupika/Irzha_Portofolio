<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import BrandIcon from '@/components/ui/BrandIcon.vue'
import IconBase from '@/components/ui/IconBase.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { contact, profile, socials } from '@/config/site'

const channels = [
  {
    key: 'mail',
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: 'mail',
    brand: false,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    value: contact.whatsappDisplay,
    href: `https://wa.me/${contact.whatsapp}`,
    icon: 'whatsapp',
    brand: true,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    value: '/in/irzha-fahrizaldy',
    href: socials.find((social) => social.key === 'linkedin').href,
    icon: 'linkedin',
    brand: true,
  },
  {
    key: 'github',
    label: 'GitHub',
    value: 'github.com/Arupika',
    href: socials.find((social) => social.key === 'github').href,
    icon: 'github',
    brand: true,
  },
]

const copied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(contact.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <section id="contact" class="section relative bg-raised/60">
    <div class="glow left-1/2 top-0 h-72 w-72 bg-brand/20"></div>

    <div class="shell">
      <SectionTitle
        eyebrow="Contact"
        title="Open for internship & full stack roles"
        lead="Reach me on whichever channel is easiest for you. I reply quickly about projects, internships, and collaboration."
      />

      <div class="mt-12 grid gap-5 lg:grid-cols-12">
        <div v-reveal class="card p-6 md:p-8 lg:col-span-7">
          <h3 class="text-lg font-bold text-bright">Direct channels</h3>
          <p class="mt-2 text-sm leading-relaxed text-dim">
            There is no fake form that only prints a success message. Every link below opens the
            real app (email, WhatsApp, LinkedIn, GitHub) pre-filled with your message.
          </p>

          <ul class="mt-6 divide-y divide-hair">
            <li v-for="channel in channels" :key="channel.key">
              <a
                :href="channel.href"
                :target="channel.href.startsWith('mailto') ? undefined : '_blank'"
                :rel="channel.href.startsWith('mailto') ? undefined : 'noopener noreferrer'"
                class="group flex items-center gap-4 py-4 transition"
              >
                <span
                  class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hair bg-card p-2.5 text-body transition group-hover:border-brand/50 group-hover:text-brand-light"
                >
                  <BrandIcon v-if="channel.brand" :name="channel.icon" :label="channel.label" />
                  <IconBase v-else :name="channel.icon" />
                </span>
                <span class="min-w-0">
                  <span
                    class="block text-[11px] font-semibold uppercase tracking-widest text-dim"
                  >
                    {{ channel.label }}
                  </span>
                  <span
                    class="block truncate text-sm font-semibold text-bright group-hover:text-brand-light"
                  >
                    {{ channel.value }}
                  </span>
                </span>
                <span
                  class="ml-auto h-4 w-4 shrink-0 text-dim transition group-hover:translate-x-1 group-hover:text-brand-light"
                >
                  <IconBase name="arrowRight" />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div v-reveal="80" class="flex flex-col gap-5 lg:col-span-5">
          <div class="card bg-gradient-to-br from-brand/15 via-card to-violet/15 p-6">
            <p class="text-[10px] font-semibold uppercase tracking-widest text-brand-light">
              Availability
            </p>
            <p class="mt-2 text-sm leading-relaxed text-bright">
              Available for internships and junior Full Stack positions while finishing
              {{ profile.educationLabel }}.
            </p>
            <p class="mt-4 flex items-center gap-2 text-xs text-dim">
              <span class="h-4 w-4"><IconBase name="pin" /></span>
              {{ profile.location }}
            </p>
          </div>

          <button
            type="button"
            class="btn btn-secondary w-full"
            aria-live="polite"
            @click="copyEmail"
          >
            <span class="h-4 w-4"><IconBase name="mail" /></span>
            {{ copied ? 'Email copied' : 'Copy email address' }}
          </button>

          <AppButton :href="`mailto:${contact.email}`" block icon="arrowRight">
            Send me an email
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>
