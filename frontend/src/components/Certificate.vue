<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const certificates = ref([]);
const API_URL = import.meta.env.PROD ? '/api/certificates' :
'http://localhost:3000/api/certificates';
onMounted(async () => {
try {
const response = await axios.get(API_URL);
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

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <div
          v-for="cert in certificates"
          :key="cert.id"
          class="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
        >
          <!-- LINK AKTIF KE SERTIFIKAT -->
          <a
            :href="cert.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block"
          >
            <img
              :src="cert.image"
              :alt="cert.title"
              class="w-full h-72 object-cover"
            />
            <div class="p-4 bg-gray-50">
              <h3 class="text-lg font-semibold text-gray-800">{{ cert.title }}</h3>
              <p class="text-sm text-gray-500">{{ cert.issuer }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
