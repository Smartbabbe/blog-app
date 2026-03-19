import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { CATEGORIES } from '../types'

interface NavbarProps {
  onNavigate: (page: string) => void
  currentPage: string
  activeCategory: string
  onCategoryChange: (cat: string) => void
}

export default function Navbar({ onNavigate, currentPage, activeCategory, onCategoryChange }: NavbarProps) {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800'
        : 'bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800'
    }`}>

      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center">
              <span className="text-white dark:text-zinc-900 font-display font-bold text-sm">D</span>
            </div>
            <div>
              <p className="font-display font-bold text-zinc-900 dark:text-zinc-100 text-lg leading-none">The Dispatch</p>
              <p className="font-sans text-[10px] text-zinc-400 tracking-widest uppercase leading-none mt-0.5">Stories Worth Reading</p>
            </div>
          </button>

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Search */}
            <button
              onClick={() => onNavigate('search')}
              className="w-9 h-9 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className="w-9 h-9 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all"
            >
              {dark ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Subscribe */}
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-sans text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-white transition-all hover:scale-105">
              Subscribe
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg"
            >
              {mobileOpen ? '✕' : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Category nav */}
      {currentPage === 'home' && (
        <div className="border-t border-zinc-100 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full font-sans text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => { onCategoryChange(cat); setMobileOpen(false); onNavigate('home') }}
                className={`px-3 py-1.5 rounded-full font-sans text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}