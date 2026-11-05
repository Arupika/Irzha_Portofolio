<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import IconBase from '@/components/ui/IconBase.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { aboutCards, aboutInterests, aboutIntro, profile } from '@/config/site'
</script>

<template>
  <section id="about" class="section relative">
    <div class="glow left-1/4 top-10 h-64 w-64 bg-violet/15"></div>

    <div class="shell">
      <SectionTitle
        eyebrow="About Me"
        title="A Full Stack Developer who cares about the whole flow"
        align="left"
      />

      <div class="mt-12 grid gap-5 lg:grid-cols-12">
        <div v-reveal class="card p-6 md:p-8 lg:col-span-7">
          <p class="text-base leading-relaxed text-bright">{{ profile.headline }}</p>
          <p
            v-for="paragraph in aboutIntro"
            :key="paragraph"
            class="mt-4 text-sm leading-relaxed text-body md:text-base"
          >
            {{ paragraph }}
          </p>

          <ul class="mt-8 grid gap-4 sm:grid-cols-2">
            <li
              v-for="(interest, index) in aboutInterests"
              :key="interest.title"
              v-reveal="index * 60"
              class="group rounded-2xl border border-hair bg-raised/60 p-4 transition duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              <span
                class="mb-3 block h-6 w-6 text-brand-light transition group-hover:text-violet-light"
              >
                <IconBase :name="interest.icon" />
              </span>
              <h3 class="text-sm font-semibold text-bright">{{ interest.title }}</h3>
              <p class="mt-1.5 text-xs leading-relaxed text-body md:text-sm">{{ interest.text }}</p>
            </li>
          </ul>
        </div>

        <div class="grid gap-5 lg:col-span-5">
          <div
            v-for="(card, index) in aboutCards"
            :key="card.label"
            v-reveal="index * 70"
            class="card flex items-start gap-4 p-5 transition duration-300 hover:border-brand/40"
          >
            <span
              class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brand/25 bg-brand/10 p-2.5 text-brand-light"
            >
              <IconBase :name="card.icon" />
            </span>
            <div>
              <p class="text-[10px] font-semibold uppercase tracking-widest text-dim">
                {{ card.label }}
              </p>
              <p class="mt-1 text-sm font-semibold leading-snug text-bright">{{ card.value }}</p>
            </div>
          </div>

          <div v-reveal class="card bg-gradient-to-br from-brand/15 via-card to-violet/15 p-5">
            <p class="text-[10px] font-semibold uppercase tracking-widest text-brand-light">
              Currently
            </p>
            <p class="mt-2 text-sm leading-relaxed text-bright">
              Open for internship and entry-level Full Stack roles — especially product teams that
              value clean, testable code.
            </p>
            <p class="mt-2 flex items-center gap-2 text-xs text-dim">
              <span class="h-4 w-4"><IconBase name="pin" /></span>
              {{ profile.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
