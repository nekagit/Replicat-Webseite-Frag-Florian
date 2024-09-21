<script setup lang="ts">
import MilanVukas from '@/assets/SOP/milan_web.jpg'
import Guest from '@/assets/SOP/predragjol.jpg'
import ABaseContactCard from '@/components/atoms/cards/ABaseContactCard.vue'
import ABaseFooterSection from '@/components/atoms/sections/ABaseFooterSection.vue'
import ABaseHorizontalSection from '@/components/atoms/sections/ABaseHorizontalSection.vue'
import ABaseCardAnBorder from '@/components/molekules/cards/MBaseCardAnBorder.vue'
import { onMounted } from 'vue'
const anbi = [
  {
    title: 'Goal',
    content:
      'The aim of the foundation is to cultivate, publicize and introduce Serbian culture into Dutch society among young people and the elderly and to carry out everything related to this or that can be conducive to this. The SOP Rotterdam Foundation tries to achieve its goal, among other things, by organizing public (inter)cultural activities that all have an interactive, educational and movement-oriented character.'
  },
  {
    title: 'REMUNERATION POLICY:',
    content:
      'There are no employees. (Article 3, paragraph 5 of the articles of association) All directors can receive compensation for the costs they have reasonably incurred in the performance of their duties. The directors receive no remuneration for their work'
  },
  {
    title: 'Контакт',
    content: 'Serbian Youth Friendship Association Rotterdam. admin@stichtingsoprotterdam.nl'
  }
]
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

</script>

<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-11 p-11">
    <ABaseCardAnBorder
      v-for="(item, index) in anbi"
      :key="index"
      :content="item.content"
      :title="item.title"
      :variant="2"
    />
  </div>
  <div class="flex flex-col lg:flex-row">
    <ABaseContactCard
      :full-name="'Milan Vukas'"
      :title="'Chairman/Treasurer'"
      :img-src="MilanVukas"
    />
    <ABaseContactCard :full-name="'Predrag Joldic'" :title="'Board member'" :img-src="Guest" />
  </div>
  <ABaseHorizontalSection class="charmFont" :content="'SOP -  Contact'" />
  <ABaseFooterSection />
</template>

<style scoped></style>
