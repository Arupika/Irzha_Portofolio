<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import AppButton from '@/components/ui/AppButton.vue'
import BrandIcon from '@/components/ui/BrandIcon.vue'
import IconBase from '@/components/ui/IconBase.vue'
import { useTypewriter } from '@/composables/useTypewriter'
import { heroRotatingRoles, profile, socials } from '@/config/site'

const { text: typedRole } = useTypewriter(heroRotatingRoles)

const stack = ['Vue 3', 'Laravel', 'Node.js', 'MySQL']
const github = socials.find((social) => social.key === 'github')
const linkedin = socials.find((social) => social.key === 'linkedin')
</script>

<template>
  <section
    id="home"
    class="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-16"
    aria-labelledby="hero-title"
  >
    <div class="glow left-[-10%] top-[-5%] h-72 w-72 bg-brand/25"></div>
    <div class="glow right-[-8%] top-1/3 h-80 w-80 bg-violet/20"></div>

    <div class="shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p class="eyebrow mb-5">{{ profile.greeting }}</p>

        <h1 id="hero-title" class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span
            class="bg-gradient-to-r from-bright via-bright to-brand-light bg-clip-text text-transparent"
          >
            {{ profile.name }}
          </span>
        </h1>

        <p
          class="mt-4 font-mono text-lg text-brand-light sm:text-xl md:text-2xl"
          aria-live="polite"
        >
          {{ typedRole
          }}<span class="ml-1 inline-block h-5 w-[2px] animate-blink bg-violet align-middle"></span>
        </p>

        <p class="mt-6 max-w-xl text-base leading-relaxed text-dim md:text-lg">
          {{ profile.summary }}
        </p>

        <div class="mt-9 flex flex-wrap items-center gap-3">
          <AppButton href="#contact" icon="arrowRight">Contact Me</AppButton>
          <AppButton
            v-if="profile.cvFile"
            :href="profile.cvFile"
            variant="secondary"
            icon="download"
          >
            Download CV
          </AppButton>
          <AppButton
            v-for="social in [github, linkedin]"
            :key="social.key"
            :href="social.href"
            variant="secondary"
          >
            <span class="h-4 w-4">
              <BrandIcon :name="social.key" :label="social.label" />
            </span>
            {{ social.label }}
          </AppButton>
        </div>

        <ul
          class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-widest text-dim/70"
        >
          <li v-for="item in stack" :key="item" class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-brand"></span>{{ item }}
          </li>
        </ul>
      </div>

      <div class="relative mx-auto w-fit">
        <div
          class="absolute -inset-6 rounded-full bg-gradient-to-tr from-brand/30 via-transparent to-violet/30 blur-2xl"
        ></div>
        <div
          class="relative h-64 w-64 animate-float rounded-full border border-hair bg-raised p-2 sm:h-80 sm:w-80"
        >
          <img
            src="/Me.jpg"
            alt="Irzha Fahrizaldy"
            class="h-full w-full rounded-full border-4 border-night object-cover"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <p
          class="card absolute -left-4 top-10 hidden gap-2 px-3 py-2 text-xs font-semibold text-bright sm:flex"
        >
          <span class="h-4 w-4 text-brand-light"><IconBase name="code" /></span>
          Full Stack
        </p>
        <p
          class="card absolute -right-2 bottom-12 hidden gap-2 px-3 py-2 text-xs font-semibold text-bright sm:flex"
        >
          <span class="h-4 w-4 text-violet-light"><IconBase name="database" /></span>
          API &amp; Database
        </p>
      </div>
    </div>

    <a
      href="#about"
      class="shell absolute inset-x-0 bottom-6 flex justify-center"
      aria-label="Scroll to about section"
    >
      <span class="flex h-10 w-6 items-start justify-center rounded-full border border-hair p-1.5">
        <span class="h-2 w-1 animate-scroll-hint rounded-full bg-brand"></span>
      </span>
    </a>
  </section>
</template>
