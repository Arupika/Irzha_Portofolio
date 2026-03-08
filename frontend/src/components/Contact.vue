<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SectionTitle from './SectionTitle.vue';
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear()); 

// Data Sosmed agar template lebih bersih
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Arupika', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/irzha-fahrizaldy-2254a0305/', icon: 'linkedin' },
  { name: 'Instagram', href: 'https://www.instagram.com/_irzha_/', icon: 'instagram' }
];
</script>

<template>
  <footer id="kontak" class="py-16 bg-gray-900 text-white relative overflow-hidden"> 
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-gray-900 z-0"></div>
    
    <div class="container mx-auto px-6 text-center relative z-10">
      <SectionTitle title="Contact Me" textColor="text-white" /> 

      <p class="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
        Jangan ragu untuk terhubung atau bertanya. Saya terbuka untuk kolaborasi dan peluang baru 😊.
      </p> 

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
        <a
          href="mailto:irzhafahri354@gmail.com"
          class="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-blue-900/20" 
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" 
            alt="Email"
            class="w-5 h-5 mr-3 brightness-0 invert" 
          />
          Kirim Email
        </a>

        <a
          href="https://wa.me/6281348680937" 
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-emerald-900/20" 
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" 
            alt="WhatsApp"
            class="w-5 h-5 mr-3 brightness-0 invert" 
          />
          WhatsApp Saya
        </a>
      </div>

      <div class="flex justify-center space-x-6 mb-10"> 
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.href"
          target="_blank"
          :aria-label="social.name"
          class="p-3 rounded-full bg-gray-800 border border-gray-700 transition-all duration-300 hover:bg-white hover:border-white group" 
        >
          <img
            :src="`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${social.icon}.svg`"
            :alt="social.name"
            class="w-5 h-5 brightness-0 invert group-hover:invert-0 group-hover:brightness-100 transition duration-300" 
          />
        </a>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <p class="text-gray-500 text-sm"> 
          &copy; {{ currentYear }} <span class="text-gray-300">Irzha Fahrizaldy</span>. Dibuat dengan ❤️
        </p>
      </div>
    </div>
  </footer>
</template>