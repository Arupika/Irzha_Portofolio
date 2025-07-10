<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const skills = ref([]);
onMounted(async () => {
try { const response = await axios.get('http://localhost:3000/api/skills'); skills.value = response.data;
} catch (error) { console.error(error); }
});
</script>
<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
       <div
  v-for="skill in skills"
  :key="skill.id"
  class="flex justify-center items-center transform transition duration-300 hover:scale-110 hover:rotate-1"
>
  <img
    :src="skill.icon"
    :alt="skill.name"
    :title="skill.name"
    class="w-14 h-14 md:w-16 md:h-16 object-contain transition duration-300 grayscale hover:grayscale-0"
  />
</div>

      </div>
    </div>
  </section>
</template>
