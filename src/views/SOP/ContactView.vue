<script setup lang="ts">
import FirmDetails from '@/components/atoms/cards/ABaseAnimationCard.vue';
import AInternetContactCard from '@/components/atoms/cards/AInternetContactCard.vue';
import ABaseFooterSection from '@/components/atoms/sections/ABaseFooterSection.vue';
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue';
import { onMounted } from 'vue';
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<template>
    <div class="flex flex-col gap-4 xl:gap-8 xl:mt-8">
      <AInternetContactCard
        :title="'Let Talk'"
        subtitle="Wanna get in contact with us? No problem, just fill out the form or directly message through email or social media."
        email="info@soprotterdam.nl"
      />
      <FirmDetails title="'Firm'" :content="'SOP Rotterdam Foundation, Poseidonstraat 7, 3054 PZ Rotterdam,  8563.68.842,  66038138,  RABO Bank NL97 RABO,  0310 6518 67,  +31 6 41173071,  info@soprotterdam.com'" />
    </div>
      <ABaseHorizontalSection class="charmFont" :content="'SOP -  Contact'" />
      <ABaseFooterSection />

</template>
