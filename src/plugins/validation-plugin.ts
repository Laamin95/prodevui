import type { App } from 'vue'
import validationRules from '../validations/validationRules'

export default {
  install(app: App) {
    app.config.globalProperties.$rules = validationRules
    app.provide('validationRules', validationRules)
  }
}