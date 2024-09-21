<template>
  <nav class="fixed top-0 left-0 w-full bg-white border-b text-[#000000ce] p-4">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-2xl font-bold text-green-500">FRAG FLORIAN!</a>
      <button @click="toggleMenu" class="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <ul
        :class="['md:flex', 'space-x-4', { hidden: !isMenuOpen }]"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <li v-for="(item, index) in menuItems" :key="index" class="relative group my-auto">
          <a
            href="#"
            @click="setActiveItem(item.name)"
            :class="[
              'hover:text-gray-400',
              { 'text-green-500 font-semibold': activeItem === item.name }
            ]"
          >
            {{ item.name }}
          </a>
          <ul
            v-if="item.submenu"
            class="absolute hidden group-hover:block bg-white text-gray-800 mt-2 py-2 rounded-md shadow-lg z-10 min-w-[200px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
              <a
                href="#"
                @click="setActiveSubItem(item.name, subItem)"
                :class="[
                  'block px-4 py-2 hover:bg-gray-100',
                  { 'text-green-500 font-semibold': activeSubItem === subItem }
                ]"
              >
                {{ subItem }}
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Button
            class="fancy-button bg-green-500 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg hover:bg-green-400"
          >
            Contact
          </Button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import AOS from 'aos'
import { onMounted, ref } from 'vue'
import {Button} from '@/components/ui/Button'
const isMenuOpen = ref(false)
const activeItem = ref('')
const activeSubItem = ref('')

const menuItems = ref([
  { name: 'Uni', submenu: ['Mathematik', 'Informatik', 'Physik', 'Ingenieurwesen'] },
  {
    name: 'Schule',
    submenu: ['Mathematik', 'Informatik', 'Physik', 'Franzoesisch', 'Englisch', 'Deutsch']
  },
  { name: 'Leben', submenu: ['Rohkost mit Sprossen', 'Bewusstsein', 'Schach', 'Webseiten'] },
  {
    name: 'Preise und andere Infos',
    submenu: [
      'Preise Termine und Bezahlung',
      'Unterrrichtsmethode',
      'Online Nachhilfe',
      'Praesenz Nachhilfe'
    ]
  },
  {
    name: 'Über mich',
    submenu: ['Ueber mich', 'Warum Nachhilfe bei Florian', 'Feedbacks', 'Links']
  }
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const setActiveItem = (itemName) => {
  activeItem.value = itemName
  activeSubItem.value = ''
}

const setActiveSubItem = (itemName, subItemName) => {
  activeItem.value = itemName
  activeSubItem.value = subItemName
}

onMounted(() => {
  AOS.refresh()
})
</script>

<style scoped>
.fancy-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  transform: scale(0);
  transition: transform 0.5s cubic-bezier(0.75, -0.5, 0, 1.75);
}

.fancy-button:hover::before {
  transform: scale(1);
}

.fancy-button:hover {
  animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0) rotate(1deg);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0) rotate(-1deg);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-3px, 0, 0) rotate(2deg);
  }
  40%,
  60% {
    transform: translate3d(3px, 0, 0) rotate(-2deg);
  }
}
</style>
