<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

onMounted(async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/skills`);
    skills.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data skills:', error);
  }
});
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Technical Skills" />
      
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-10 mt-12">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="group flex flex-col items-center justify-center space-y-3"
        >
          <div class="relative w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-100 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md group-hover:border-blue-200">
            <img
              :src="skill.icon"
              :alt="skill.name"
              class="w-10 h-10 md:w-12 md:h-12 object-contain transition duration-300 grayscale group-hover:grayscale-0"
              loading="lazy"
            />
          </div>
          
          <span class="text-xs font-bold text-gray-500 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>