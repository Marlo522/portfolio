import { createContext, useContext } from 'react'

export type Theme = 'light' | 'dark'
export type ThemeState = { theme: Theme; isDark: boolean; toggle: () => void }
export const ThemeContext = createContext<ThemeState | null>(null)

export function useDarkMode() {
  const value = useContext(ThemeContext)
  if (!value) throw new Error('useDarkMode must be used within ThemeProvider')
  return value
}
