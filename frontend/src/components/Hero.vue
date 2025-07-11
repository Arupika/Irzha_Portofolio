<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue';

const fullText = 'Halo, Saya Irzha Fahrizaldy';
const typedText = ref('');
let index = 0;

onMounted(() => {
  const interval = setInterval(() => {
    typedText.value += fullText[index];
    index++;
    if (index >= fullText.length) clearInterval(interval);
  }, 80);
});
</script>

<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 mb-10 md:mb-0">
      <!-- Judul dengan efek ketik -->
      <h1 class="text-5xl font-bold text-gray-800 mb-4">
        <!-- Pecah teks untuk pewarnaan -->
        <span>
          <!-- Warna default (hitam) -->
          {{ typedText.replace(/Irzha Fahrizaldy$/, '') }}
        </span>
        <span class="text-blue-600">
          {{
            typedText.includes('Irzha Fahrizaldy')
              ? 'Irzha Fahrizaldy'
              : ''
          }}
        </span>
        <span class="border-r-2 border-blue-600 animate-pulse ml-1"></span>
      </h1>

      <!-- Deskripsi -->
      <p class="text-xl text-gray-600 mb-8 animate-slide-in-left" style="animation-delay: 400ms;">
        Mahasiswa Teknik Informatika yang ingin menjadi seorang Full Stack Developer. Saya
        sangat tertarik dalam pengembangan aplikasi web menggunakan teknologi seperti Vue.js, Laravel,
        dan MySQL.
      </p>

      <!-- Tombol -->
      <a
        href="#kontak"
        class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg 
               hover:bg-gray-500 hover:text-black
               transition-colors duration-300 inline-block animate-slide-in-left"
        style="animation-delay: 600ms;"
      >
        Hubungi Saya
      </a>
    </div>

    <!-- Foto Profil -->
    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <img
        src="/src/assets/Me.jpg"
        alt="Foto Profil"
        class="w-80 h-80 rounded-full object-cover shadow-lg"
      />
    </div>
  </section>
</template>
