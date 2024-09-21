<template>
  <div class="flex flex-col xl:flex-row gap-7 justify-center">
    <ABaseImageSection v-for="item in 3" :key="item" :button="false" :position="'left'" :sectionItem="weAreSection" />
  </div>
  <hr  />
  <ABaseHorizontalSection class="charmFont" :content="'Home | Services'" />
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-6">
    <ABaseIconSection v-for="item in 6" :key="item" :button="false" :position="'left'" :sectionItem="weAreSection" />
  </div>
</template>

<script setup lang="ts">
import ABaseHorizontalSection from "@/components/atoms/sections/ABaseHorizontalSection.vue";
import ABaseIconSection from "@/components/atoms/sections/ABaseIconSection.vue";
import ABaseImageSection from "@/components/molekules/MBaseImageSection.vue";

const weAreSection = {
  title: 'We are awesome TEAM',
  content: [
    'Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ',
  ],
  button: 'Info'
};
</script>

<style scoped>
</style>
