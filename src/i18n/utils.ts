import type { AppLanguages } from '@/types/languages'
import { defaultLang, ui } from './ui'

export function getLangFromUrl(url: URL): AppLanguages {
  const [, lang] = url.pathname.split('/')

  if (lang === 'en' || lang === 'es') return lang as AppLanguages

  return defaultLang
}

export function useTranslations(lang: AppLanguages) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key]
  }
}
