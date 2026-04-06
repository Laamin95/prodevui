import type { App } from 'vue'
import { useI18n } from './useI18n'
import { setRtl } from '../rtl/setRtl'
import { watch } from 'vue'

export const i18nPlugin = {
  install(app: App) {
    const { t, setLanguage, language } = useI18n()

    watch(language, (newLang) => {
      if (newLang === 'dv') {
        setRtl(true)
      } else {
        setRtl(false)
      }
    })

    app.provide('i18n', {
      t,
      setLanguage,
      language,
    })

    app.config.globalProperties.$t = t
    app.config.globalProperties.$setLanguage = setLanguage
    app.config.globalProperties.$language = language
  }
}
