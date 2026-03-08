<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

onMounted(async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/projects`);
    projects.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data projek:', error);
  }
});
</script>

<template>
  <section id="proyek" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="My Featured Projects" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-12">
        <div 
          v-for="project in projects" 
          :key="project.title" 
          class="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="relative overflow-hidden h-64">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <span class="text-white text-sm font-medium">Klik untuk detail proyek</span>
            </div>
          </div>

          <div class="p-8 flex-grow flex flex-col">
            <h3 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-600 mb-6 line-clamp-3">
              {{ project.description }}
            </p>

            <div class="mt-auto mb-6 flex flex-wrap gap-2">
              <span 
                v-for="t in project.tech" 
                :key="t" 
                class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg border border-blue-100"
              >
                {{ t }}
              </span>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-gray-50">
              <a 
                :href="project.link" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group/link"
              >
                View Project 
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>