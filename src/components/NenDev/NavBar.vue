<template>
  <div class="xl:hidden">
    <AMenuButton />
  </div>
    <SpinningButton />

  <nav class="flex items-center justify-between p-32 pt-8 pb-12 bg-[#00000057] sticky top-0 z-10 mb-16">
    <div class="flex space-x-8 hidden xl:block dark:text-white">
      <RouterLink to="/" class="nav-link arimo" active-class="activeLink">Home</RouterLink>
      <RouterLink to="/about" class="nav-link arimo" active-class="activeLink">About</RouterLink>
      <RouterLink to="/projects" class="nav-link arimo" active-class="activeLink">Projects</RouterLink>
      <RouterLink to="/education" class="nav-link arimo" active-class="activeLink">Education</RouterLink>
    </div>
    <div class="flex justify-center flex-1">
      <RouterLink to="/" class="logo">NK</RouterLink>
    </div>
    <div class="flex items-center space-x-4">
      <div class="space-x-8 hidden xl:flex">
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
    <DarkModeToggle />
  </nav>
</template>

<script setup lang="ts">
import AMenuButton from '@/components/NenDev/AMenuButton.vue';
import DarkModeToggle from '@/components/NenDev/DarkModeToggle.vue';
import SpinningButton from "@/components/NenDev/SpinningButton.vue";
import { Icon } from '@iconify/vue';

</script>
<style scoped>
.nav-link {
  position: relative;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: medium;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: gray;
  transition:
    width 0.4s ease,
    background-color 0.4s ease;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
  background: gray;
}

.activeLink {
  color: #d4840a;
}

.logo {
  position: absolute;
  top: 15%;
  left: 48%;
  background-color: white;
  color: black;
  border: 1px dotted black;
  border-radius: 50%;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  transition: all 1s ease;
}

.logo:hover {
  border: 3px solid #641200; /* Border color */
  background-color: #a53400; /* Change background color on hover */
  color: #fff; /* Optional: Change text color on hover */
  animation: rotate 1s linear; /* Add rotation animation */
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .logo {
    left: 40%;
  }
}

.social-icon {
  font-size: 24px; /* Adjust size if needed */
  transition: color 0.3s ease;
}

.twitter {
  color: #1da1f2; /* Twitter color */
}

.github {
  color: #333; /* GitHub color */
}

.linkedin {
  color: #0077b5; /* LinkedIn color */
}

.pinterest {
  color: #e60023; /* Pinterest color */
}

.instagram {
  color: #ea4c89; /* Instagram color */
}

.custom {
  color: black; /* Custom social icon color */
}

/* Optional: Hover effect */
.social-icon:hover {
  color: #555; /* Change color on hover if needed */
}
</style>
