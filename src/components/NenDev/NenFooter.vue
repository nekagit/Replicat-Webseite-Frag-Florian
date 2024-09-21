<template>
  <ABaseHorizontalSection class="gradientText text-2xl" :title="'Contact'" />
  <div class="container">
    <footer>
      <div
        class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center text-center font-bold"
      >
        <div class="">
          <a href="mailto:nenad99@hotmail.de" class="opacity-60 hover:text-blue-300"
            >nenad99@hotmail.de</a
          >
        </div>
        <p class="opacity-60">&copy; 2024 Nenad Kalicanin.</p>
        <p>
          Inspired by
          <a target="_blank" class="underline underline-offset-2" href="https://devdreaming.com"
            >CodeBucks</a
          >
        </p>
         <p>
          Inspired by
          <a target="_blank" class="underline underline-offset-2" href="https://flext.dev/"
            >Felix Tellmann</a
          >
        </p>
          

        <div class="flex items-center space-x-4">
          <div class="space-x-8 flex xl:hidden">
            <a
              href="https://www.linkedin.com/in/nenad-kalicanin-23924119a/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon linkedin"
            >
              <Icon icon="mdi:linkedin" />
            </a>
            <a
              href="https://github.com/nekagit"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon github"
            >
              <Icon icon="mdi:github" />
            </a>
            <a
              href="https://www.instagram.com/nenadkal/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon instagram"
            >
              <Icon icon="mdi:instagram" />
            </a>
            <a
              href="https://www.pinterest.de/kalicanin1137/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon pinterest"
            >
              <Icon icon="mdi:pinterest" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import ABaseHorizontalSection from '../atoms/sections/ABaseHorizontalSection.vue';
</script>
