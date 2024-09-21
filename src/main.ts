import './styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import { createHead } from '@vueuse/head'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const head = createHead()
app.use({
  install: () => {
    AOS.init({
      // Global settings
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50
    })
  }
})
app.use(head)
app.use(createPinia())
app.use(router)
app.use(MotionPlugin)


app.mount('#app')
