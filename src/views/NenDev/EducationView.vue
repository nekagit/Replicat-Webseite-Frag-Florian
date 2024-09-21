<script setup lang="ts">
import PhotoStack from '@/components/NenDev/PhotoStack.vue';
import { onMounted } from 'vue';
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<template>
  <div class="lg:mb-0 mb-16">

    <PhotoStack/>
  </div>
</template>
