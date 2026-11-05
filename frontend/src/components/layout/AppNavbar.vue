<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import IconBase from '@/components/ui/IconBase.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { useScrolled } from '@/composables/useScrolled'
import { profile, sections } from '@/config/site'

const { active } = useActiveSection(sections.map((section) => section.id))
const { scrolled } = useScrolled()
const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

/** Tautan navigasi: tandai section aktif dan tutup menu mobile. */
function selectSection(id) {
  active.value = id
  closeMenu()
}
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      scrolled || menuOpen
        ? 'border-b border-hair bg-night/80 backdrop-blur-xl'
        : 'border-b border-transparent bg-transparent',
    ]"
  >
    <nav class="shell flex items-center justify-between py-4" aria-label="Main navigation">
      <a
        href="#home"
        class="group flex items-center gap-3"
        aria-label="Irzha Fahrizaldy — back to top"
        @click="selectSection('home')"
      >
        <span
          class="grid h-10 w-10 place-items-center rounded-xl border border-brand/40 bg-brand/10 font-mono text-sm font-bold text-brand-light transition group-hover:border-brand"
        >
          {{ profile.initials }}
        </span>
        <span class="hidden text-sm font-semibold tracking-tight text-bright sm:block">
          {{ profile.name }}
        </span>
      </a>

      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="section in sections" :key="section.id">
          <a
            :href="`#${section.id}`"
            :aria-current="active === section.id ? 'true' : undefined"
            :class="[
              'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300',
              active === section.id ? 'text-brand-light' : 'text-dim hover:text-bright',
            ]"
          >
            {{ section.label }}
            <span
              v-if="active === section.id"
              class="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand to-violet"
            />
          </a>
        </li>
        <li class="ml-3">
          <a href="#contact" class="btn btn-primary px-4 py-2" @click="selectSection('contact')">
            Hire Me
          </a>
        </li>
      </ul>

      <button
        type="button"
        class="rounded-lg border border-hair p-2 text-bright transition hover:border-brand/60 lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <span class="block h-5 w-5">
          <IconBase :name="menuOpen ? 'close' : 'menu'" />
        </span>
      </button>
    </nav>

    <div v-show="menuOpen" id="mobile-menu" class="border-t border-hair bg-night/95 lg:hidden">
      <ul class="shell flex flex-col gap-1 py-4">
        <li v-for="section in sections" :key="section.id">
          <a
            :href="`#${section.id}`"
            :class="[
              'block rounded-xl px-4 py-3 text-sm font-medium transition-colors',
              active === section.id
                ? 'bg-brand/10 text-brand-light'
                : 'text-dim hover:bg-raised hover:text-bright',
            ]"
            @click="selectSection(section.id)"
          >
            {{ section.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
