'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Locale } from '@/i18n.config'

export const LanguageSwitcher = ({ lang }: { lang: Locale }) => {
  const pathName = usePathname()

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    // Main container for the toggle
    <div className="relative flex w-[100px] items-center rounded-full bg-gray-900/80 p-1 border border-white/10">
      
      {/* The moving, colored highlight */}
      <div
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-transform duration-300 ease-in-out
          ${lang === 'en' ? 'translate-x-0 bg-toggle-blue' : 'translate-x-full bg-toggle-red'}`
        }
      />
      
      {/* Link for English */}
      <Link 
        href={redirectedPathName('en')} 
        className={`relative z-10 flex-1 text-center py-1 text-sm font-semibold transition-colors
          ${lang === 'en' ? 'text-white' : 'text-gray-400 hover:text-white'}`
        }
      >
        EN
      </Link>
      
      {/* Link for Nepali */}
      <Link 
        href={redirectedPathName('ne')} 
        className={`relative z-10 flex-1 text-center py-1 text-sm font-semibold transition-colors
          ${lang === 'ne' ? 'text-white' : 'text-gray-400 hover:text-white'}`
        }
      >
        NE
      </Link>
      
    </div>
  )
}