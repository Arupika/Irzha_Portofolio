<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

onMounted(async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/education`);
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data pendidikan:', error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Education" />
      
      <div class="relative mt-12">
        <div class="hidden md:block absolute h-full border-r-2 border-blue-200 left-1/2 transform -translate-x-1/2"></div>

        <div v-for="(edu, index) in educationHistory" :key="edu.id" class="mb-12 flex flex-col md:flex-row items-center w-full relative">
          
          <div class="w-full md:w-1/2 flex md:justify-end">
            <div v-if="index % 2 === 0" class="w-full md:max-w-md p-6 bg-white rounded-xl shadow-sm border border-gray-100 md:mr-10 md:text-right">
              <span class="inline-block px-3 py-1 mb-2 text-xs font-bold text-blue-600 bg-blue-50 rounded-full">
                {{ edu.period }}
              </span>
              <h3 class="text-xl md:text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600 font-medium mt-1">{{ edu.major }}</p>
              <p v-if="edu.description" class="text-sm text-gray-400 mt-2">{{ edu.description }}</p>
            </div>
            <div v-else class="hidden md:block w-full md:max-w-md"></div>
          </div>

          <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
            <div class="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
          </div>

          <div class="w-full md:w-1/2 flex md:justify-start mt-4 md:mt-0">
            <div v-if="index % 2 !== 0" class="w-full md:max-w-md p-6 bg-white rounded-xl shadow-sm border border-gray-100 md:ml-10 md:text-left">
              <span class="inline-block px-3 py-1 mb-2 text-xs font-bold text-blue-600 bg-blue-50 rounded-full">
                {{ edu.period }}
              </span>
              <h3 class="text-xl md:text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600 font-medium mt-1">{{ edu.major }}</p>
              <p v-if="edu.description" class="text-sm text-gray-400 mt-2">{{ edu.description }}</p>
            </div>
            <div v-else class="hidden md:block w-full md:max-w-md"></div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>