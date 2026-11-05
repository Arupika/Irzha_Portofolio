<script setup>
import BrandIcon from '@/components/ui/BrandIcon.vue'
import IconBase from '@/components/ui/IconBase.vue'
import { profile, sections, socials } from '@/config/site'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-hair bg-night">
    <div class="shell py-12">
      <div class="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div class="max-w-sm">
          <a href="#home" class="flex items-center gap-3">
            <span
              class="grid h-10 w-10 place-items-center rounded-xl border border-brand/40 bg-brand/10 font-mono text-sm font-bold text-brand-light"
            >
              {{ profile.initials }}
            </span>
            <span class="text-sm font-semibold text-bright">{{ profile.name }}</span>
          </a>
          <p class="mt-4 text-sm leading-relaxed text-dim">{{ profile.headline }}</p>
        </div>

        <nav class="flex flex-col gap-3" aria-label="Footer navigation">
          <p class="text-[11px] font-semibold uppercase tracking-widest text-dim/70">Sections</p>
          <a
            v-for="section in sections"
            :key="section.id"
            :href="`#${section.id}`"
            class="text-sm text-dim transition hover:text-brand-light"
          >
            {{ section.label }}
          </a>
        </nav>

        <div class="flex flex-col gap-3">
          <p class="text-[11px] font-semibold uppercase tracking-widest text-dim/70">Elsewhere</p>
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.key"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="grid h-10 w-10 place-items-center rounded-xl border border-hair bg-card p-2.5 text-body transition duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand-light"
            >
              <BrandIcon :name="social.key" :label="social.label" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-hair pt-6 sm:flex-row"
      >
        <p class="text-xs text-dim/70">
          &copy; {{ year }} {{ profile.name }}. Built with Vue 3, Tailwind CSS &amp; Express.
        </p>
        <a
          href="#home"
          class="inline-flex items-center gap-2 text-xs font-semibold text-dim transition hover:text-brand-light"
        >
          Back to top
          <span class="h-3.5 w-3.5 rotate-180"><IconBase name="arrowDown" /></span>
        </a>
      </div>
    </div>
  </footer>
</template>
