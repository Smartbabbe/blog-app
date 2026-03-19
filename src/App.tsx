import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { Article } from './types'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import SearchPage from './pages/SearchPage'

function AppContent() {
  const [page, setPage] = useState('home')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article)
    setPage('article')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigate = (p: string) => {
    setPage(p)
    if (p === 'home') setSelectedArticle(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar
        onNavigate={handleNavigate}
        currentPage={page}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {page === 'home' && (
        <HomePage onArticleClick={handleArticleClick} activeCategory={activeCategory} />
      )}
      {page === 'article' && selectedArticle && (
        <ArticlePage
          article={selectedArticle}
          onBack={() => handleNavigate('home')}
          onArticleClick={handleArticleClick}
        />
      )}
      {page === 'search' && (
        <SearchPage onBack={() => handleNavigate('home')} onArticleClick={handleArticleClick} />
      )}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}