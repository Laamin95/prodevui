import type { App } from 'vue'

// plugins
import validationPlugin from './plugins/validation-plugin'
import { i18nPlugin } from './lib/i18n/i18nPlugin'
import { tooltipDirective } from './lib/tooltip-directive'
import { useSnackbar } from '@/lib/useSnackbar'
import { applyConfig, type UiConfig } from './lib/config'

// Components
import defaultsComponents from './components/index'
export * from './components/index'

// Composables & Config
export { useSnackbar } from './lib/useSnackbar'
export { useI18n } from './lib/i18n/useI18n'
export { useRtl } from './lib/core/useRtl'
export { defineUiConfig, useUiConfig, getDefault } from './lib/config'
export type { UiConfig, UiDefaultsConfig } from './lib/config'

const snackbar = useSnackbar()

export default {
  install(app: App, config: UiConfig = {}) {
    // Apply user configuration before registering components
    applyConfig(config)

    app.provide('snackbar', snackbar)
    app.config.globalProperties.$snackbar = snackbar
    app.use(defaultsComponents)
    app.use(validationPlugin)
    app.use(i18nPlugin)
    app.directive('tooltip', tooltipDirective)
  }
}
