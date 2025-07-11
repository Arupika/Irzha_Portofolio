<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SectionTitle from './SectionTitle.vue';
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear()); 
</script>

<template>
  <footer id="kontak" class="py-12 bg-gray-800 text-white relative overflow-hidden"> 
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 opacity-50 z-0"></div>
    <div class="container mx-auto px-6 text-center relative z-10">
      
      <SectionTitle title="Hubungi Saya" textColor="text-white" /> 

      <p class="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
        Jangan ragu untuk terhubung atau bertanya. Saya terbuka untuk kolaborasi dan peluang baru 😊.
      </p> 

      <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-10">
        
        <a
          href="mailto:irzhafahri354@gmail.com"
          class="inline-flex items-center justify-center 
                 bg-blue-600 text-white font-bold py-2.5 px-6 rounded-lg 
                 hover:bg-gray-200 hover:text-gray-800 hover:scale-105 
                 transition-all duration-300 ease-in-out group shadow-lg" 
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" 
            alt="Email Icon"
            class="w-5 h-5 mr-2 filter invert group-hover:filter-none transition duration-300" 
          />
          Kirim Email
        </a>

        <a
          href="https://wa.me/6281348680937" target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center 
                 bg-green-500 text-white font-bold py-2.5 px-6 rounded-lg 
                 hover:bg-white hover:text-gray-800 hover:scale-105 
                 transition-all duration-300 ease-in-out group shadow-lg" 
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" 
            alt="WhatsApp Icon"
            class="w-5 h-5 mr-2 filter invert group-hover:filter-none transition duration-300" 
          />
          WhatsApp Saya
        </a>
      </div>

      <div class="flex justify-center space-x-5 mb-8"> 
        <a
          href="https://github.com/Arupika"
          target="_blank"
          class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 border border-white transition-all duration-300 group hover:bg-white hover:scale-110" 
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
            alt="GitHub"
            class="w-4 h-4 filter invert group-hover:invert-0 transition duration-300" 
          />
        </a>

        <a
          href="https://www.linkedin.com/in/irzha-fahrizaldy-2254a0305/"
          target="_blank"
          class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 border border-white transition-all duration-300 group hover:bg-white hover:scale-110" 
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
            alt="LinkedIn"
            class="w-4 h-4 filter invert group-hover:invert-0 transition duration-300" 
          />
        </a>

        <a
          href="https://www.instagram.com/_irzha_/"
          target="_blank"
          class="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 border border-white hover:border-primary to-white transition-all duration-300 group hover:bg-white hover:scale-110" 
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
            alt="Instagram"
            class="w-4 h-4 filter invert group-hover:invert-0 transition duration-300" 
          />
        </a>
      </div>

      <p class="text-gray-500 text-sm"> 
        &copy; {{ currentYear }} Irzha Fahrizaldy. Dibuat dengan ❤️
      </p>
    </div>
  </footer>
</template>

<style scoped>
/* Anda bisa menambahkan gaya CSS khusus untuk komponen ini di sini jika diperlukan */
</style>