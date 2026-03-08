<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const certificates = ref([]);

// Gunakan VITE_API_URL yang nanti kita set di dashboard Vercel
// Jika tidak ada (saat dev), dia akan lari ke localhost:3000
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

onMounted(async () => {
  try {
    // Pastikan path-nya lengkap
    const response = await axios.get(`${API_BASE_URL}/api/certificates`);
    certificates.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data sertifikat:', error);
  }
});
</script>

<template>
  <section id="sertifikat" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Certification" />

      <div v-if="certificates.length === 0" class="text-center py-10 text-gray-400">
        Memuat sertifikat...
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <div
          v-for="cert in certificates"
          :key="cert.id"
          class="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 border border-gray-100"
        >
          <a
            :href="cert.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <img
              :src="cert.image"
              :alt="cert.title"
              class="w-full h-72 object-cover bg-gray-200"
              loading="lazy"
            />
            <div class="p-4 bg-gray-50">
              <h3 class="text-lg font-semibold text-gray-800 leading-tight">{{ cert.title }}</h3>
              <p class="text-sm text-gray-500 mt-1">{{ cert.issuer }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>