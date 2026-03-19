import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface ThemeContextType { dark: boolean; toggle: () => void }
const ThemeContext = createContext<ThemeContextType>({ dark: false, toggle: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(() => {
    const s = localStorage.getItem('dispatch-dark')
    return s ? JSON.parse(s) : false
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('dispatch-dark', JSON.stringify(dark))
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark((d: boolean) => !d) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)