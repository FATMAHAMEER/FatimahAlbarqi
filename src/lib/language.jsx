import { useEffect, useState } from 'react'
import { CONTENT } from '../content'
import { LanguageContext, STORAGE_KEY } from './languageContext'

function readInitialLang() {
  if (typeof window === 'undefined') return 'ar'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'ar' || saved === 'en' ? saved : 'ar'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang)

  // مصدر الحقيقة الوحيد لاتجاه الصفحة ولغتها
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = CONTENT[lang].dir
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = {
    lang,
    dir: CONTENT[lang].dir,
    isRTL: lang === 'ar',
    t: CONTENT[lang],
    toggle: () => setLang((l) => (l === 'ar' ? 'en' : 'ar')),
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
