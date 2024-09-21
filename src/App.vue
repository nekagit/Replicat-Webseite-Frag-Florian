<!-- App.vue -->
<template>
  <NavBar />
  <transition name="fade" mode="out-in">
    <router-view v-if="!isLoading" class="bg-white dark:bg-[#090E19] text-black dark:text-white" />
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import NavBar from '@/components/Florian/NavBar.vue';
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false // Hide loading screen after 3 seconds
  }, 2800)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
