import { useEffect, useLayoutEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from '@/hooks/useDarkMode'
import lightProfile from '@/assets/profile/profile-lightmode.png'
import darkProfile from '@/assets/profile/profile-darkmode.png'

type Preference = Theme | 'system'
const storageKey = 'portfolio-theme'
const themeQuery = '(prefers-color-scheme: dark)'

function readPreference(): Preference {
  try {
    const value = localStorage.getItem(storageKey)
    return value === 'dark' || value === 'light' ? value : 'system'
  } catch { return 'system' }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<Preference>(readPreference)
  const [systemTheme, setSystemTheme] = useState<Theme>(() => window.matchMedia(themeQuery).matches ? 'dark' : 'light')
  const theme = preference === 'system' ? systemTheme : preference

  useEffect(() => {
    const media = window.matchMedia(themeQuery)
    const onSystemChange = () => setSystemTheme(media.matches ? 'dark' : 'light')
    const onStorage = (event: StorageEvent) => {
      if (event.key === storageKey || event.key === null) setPreference(readPreference())
    }
    onSystemChange()
    media.addEventListener('change', onSystemChange)
    window.addEventListener('storage', onStorage)
    return () => {
      media.removeEventListener('change', onSystemChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111111' : '#ffffff')
  }, [theme])

  useEffect(() => {
    const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
    if (!icon) return
    let active = true
    const image = new Image()
    const source = theme === 'dark' ? darkProfile : lightProfile
    icon.href = source
    image.onload = () => {
      if (!active) return
      const canvas = document.createElement('canvas')
      canvas.width = canvas.height = 64
      const context = canvas.getContext('2d')
      if (!context) return
      // Frame the face so the portrait stays recognizable at tab-icon size.
      const size = image.naturalWidth * 0.64
      context.drawImage(image, (image.naturalWidth - size) / 2, image.naturalHeight * 0.08, size, size, 0, 0, 64, 64)
      icon.href = canvas.toDataURL('image/png')
    }
    image.src = source
    return () => { active = false; image.onload = null }
  }, [theme])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setPreference(next)
    try { localStorage.setItem(storageKey, next) } catch { /* The theme still works without browser storage. */ }
  }

  return <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', toggle }}>{children}</ThemeContext.Provider>
}
