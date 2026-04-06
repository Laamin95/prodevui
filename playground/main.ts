import { createApp } from 'vue'
import '../src/assets/tailwind.css'
import App from './App.vue'
import router from './router'
import ui, { defineUiConfig } from '../src/index'

// Example: customize ProdevUI defaults
const config = defineUiConfig({
  defaults: {
    rounded: 'lg',
  },
  // Per-component overrides
  // components: {
  //   Button: { rounded: 'full' },
  // }
})

const app = createApp(App)
app.use(router)
app.use(ui, config)
app.mount('#app')
