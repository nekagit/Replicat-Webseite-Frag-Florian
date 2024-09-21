<script setup lang="ts">
import ABaseFooterSection from '@/components/atoms/sections/ABaseFooterSection.vue';
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
import MBaseGallerySlider from "@/components/molekules/img/MBaseGallerySlider.vue";
import {  onMounted } from 'vue'
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<template>
 <MBaseGallerySlider :slider-titles="['SOP', 'Sport', 'School']" class="mt-10" />
  <ABaseHorizontalSection class="charmFont" :content="'SOP -  Gallery'" />
  <ABaseFooterSection />

</template>

<style scoped>
</style>
