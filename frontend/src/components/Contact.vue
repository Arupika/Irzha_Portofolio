<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung atau bertanya 😊.</p>

      <a
        href="mailto:irzhafahri354@gmail.com"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg
         hover:bg-gray-500 hover:text-black
        transition-colors duration-300 inline-block mb-12"
      >
        Kirim Email
      </a>

      <!-- Media Sosial -->
      <div class="flex justify-center space-x-6 mb-8">
        <!-- GitHub -->
        <a
          href="https://github.com/Arupika"
          target="_blank"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-white transition-all duration-300 group  hover:bg-white"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
            alt="GitHub"
            class="w-5 h-5 filter invert group-hover:invert-0 transition duration-300"
          />
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/irzha-fahrizaldy-2254a0305/"
          target="_blank"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-white transition-all duration-300 group hover:bg-white"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
            alt="LinkedIn"
            class="w-5 h-5 filter invert group-hover:invert-0 transition duration-300"
          />
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com/_irzha_/"
          target="_blank"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-white hover:border-primary to-white transition-all duration-300  group  hover:bg-white"
        >
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
            alt="Instagram"
            class="w-5 h-5 filter invert group-hover:invert-0 transition duration-300"
          />
        </a>
      </div>

      <p class="text-gray-500 ">
        &copy; {{ new Date().getFullYear() }} Irzha Fahrizaldy. Dibuat dengan ❤️
      </p>
    </div>
  </footer>
</template>



