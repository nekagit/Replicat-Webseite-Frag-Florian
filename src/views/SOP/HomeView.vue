<script setup lang="ts">
import ABaseFooterSection from '@/components/atoms/sections/ABaseFooterSection.vue';
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
import HomeIntroComponent from '@/components/home/HomeIntroComponent.vue';
import {  onMounted } from 'vue'
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<template>
    <HomeIntroComponent />
    <ABaseHorizontalSection class="charmFont" :content="'SOP -  Home'" />
  <ABaseFooterSection />

</template>
