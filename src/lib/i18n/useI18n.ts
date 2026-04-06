import { ref, computed } from 'vue'
import { messages } from './defaultLables'

const currentLanguage = ref(localStorage.getItem('language') || 'en')

export const useI18n = () => {
  const t = (key: string, lang = '') => {
    const selectedLang = lang || currentLanguage.value
    const keys = key.split('.')
    let value: any = (messages as Record<string, any>)[selectedLang]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  const setLanguage = (lang: string) => {
    if ((messages as Record<string, any>)[lang]) {
      currentLanguage.value = lang
      localStorage.setItem('language', lang)
      document.documentElement.lang = lang
    }
  }

  const language = computed(() => currentLanguage.value)

  return {
    t,
    setLanguage,
    language,
  }
}
