import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../i18n/translations.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'vi',
  )

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = {
    lang,
    setLang,
    toggle: () => setLang((l) => (l === 'vi' ? 'en' : 'vi')),
    t: translations[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage phải dùng bên trong <LanguageProvider>')
  return ctx
}
