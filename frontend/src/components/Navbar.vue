<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('profil') // Default aktif saat pertama

// (1) Sesuaikan: Daftar ID semua bagian konten di halaman utama Anda
const sectionIds = ['profil', 'pendidikan', 'skill', 'sertifikat', 'proyek', 'kontak'];
const observers = []; // Digunakan untuk menyimpan IntersectionObserver instances

const createObserver = (id) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = id; // Mengupdate activeSection saat bagian terlihat
        }
      });
    },
    {
      root: null, // Menggunakan viewport sebagai root (area pengamatan)
      // (2) Sesuaikan (opsional): Margin untuk menentukan kapan bagian dianggap aktif
      // -50% 0px -50% 0px berarti bagian aktif saat bagian tengahnya berada di tengah viewport.
      rootMargin: '-50% 0px -50% 0px', 
      threshold: 0, // Callback dipicu segera setelah 1 piksel elemen masuk/keluar
    }
  );

  const target = document.getElementById(id); // Mendapatkan elemen berdasarkan ID
  if (target) {
    observer.observe(target); // Mulai mengamati elemen
    observers.push(observer); // Simpan observer untuk dibersihkan nanti
  }
};

// Penyiapan Observer saat komponen dimuat
onMounted(() => {
  sectionIds.forEach(id => createObserver(id));
});

// Pembersihan Observer saat komponen tidak lagi digunakan
onUnmounted(() => {
  observers.forEach(observer => observer.disconnect());
});
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a
        href="#profil"
        class="text-2xl font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-700"
        @click="activeSection = 'profil'"
      >
        Irzha Fahrizaldy
      </a>

      <ul class="flex space-x-6">
        <li
          v-for="id in sectionIds" :key="id" 
        >
          <a
            :href="`#${id}`"
            @click="activeSection = id"
            :class="[ 
              'font-medium relative transition-all duration-300 after:content-[\'\'] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300',
              activeSection === id
                ? 'text-blue-600 after:w-full' // Kelas saat menu aktif (ter-highlight)
                : 'text-gray-700 hover:text-blue-600 after:w-0' // Kelas saat menu tidak aktif
            ]"
          >
            {{ id.charAt(0).toUpperCase() + id.slice(1) }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Anda bisa menambahkan gaya CSS khusus untuk navbar di sini */
</style>
