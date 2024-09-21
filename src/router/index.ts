import { createRouter, createWebHistory } from 'vue-router'
import ResumeView from '@/views/Florian/ResumeView.vue'
import HomeView from '../views/Florian/HomeView.vue'
import AboutView from '@/views/Florian/AboutView.vue'
import EducationView from '@/views/Florian/EducationView.vue'
import ProjectsView from '@/views/Florian/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/education',
      name: 'education',
      component: EducationView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    }
  ]
})

export default router
