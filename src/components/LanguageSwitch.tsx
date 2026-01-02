// Types
import type { AppLanguages } from '@/types/languages'

// React
import { useEffect, useState } from 'react'

export default function LanguageSwitch() {
  const [activeLang, setActiveLang] = useState<AppLanguages>('ES')
  const activeLangStyles = 'bg-blue-600 text-white scale-105'
  const inactiveLangStyles = 'text-gray-300 hover:text-white'

  useEffect(() => {
    console.log(`Language changed to: ${activeLang}`)
  }, [activeLang])

  return (
    <div className="flex items-center bg-gray-800 rounded-full p-1 gap-1">
      <button
        onClick={() => {
          setActiveLang('ES')
        }}
        className={`
          px-2 py-1 rounded-full text-xs font-medium transition-all duration-200
          ${activeLang === 'ES' ? activeLangStyles : inactiveLangStyles}
        `}
      >
        ES
      </button>

      <button
        onClick={() => {
          setActiveLang('EN')
        }}
        className={`
          px-2 py-1 rounded-full text-xs font-medium transition-all duration-200
          ${activeLang === 'EN' ? activeLangStyles : inactiveLangStyles}
        `}
      >
        EN
      </button>
    </div>
  )
}
