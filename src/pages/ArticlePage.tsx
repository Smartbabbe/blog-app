import { Article, CATEGORY_COLORS } from '../types'
import { articles } from '../data/articles'
import ArticleCard from '../components/ArticleCard'

interface ArticlePageProps {
  article: Article
  onBack: () => void
  onArticleClick: (article: Article) => void
}

const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

export default function ArticlePage({ article, onBack, onArticleClick }: ArticlePageProps) {
  const related = articles
    .filter(a => a.id !== article.id && (a.category === article.category || a.author.name === article.author.name))
    .slice(0, 3)

  const categoryColor = CATEGORY_COLORS[article.category] || 'bg-zinc-100 text-zinc-700'

  // Convert markdown-style content to paragraphs
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return (
          <h2 key={i} className="font-display font-bold text-2xl text-zinc-900 dark:text-zinc-100 mt-10 mb-4 leading-snug">
            {block.replace('## ', '')}
          </h2>
        )
      }
      return (
        <p key={i} className="font-sans text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-6">
          {block}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-24">

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-sans text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Feed
        </button>
      </div>

      <article className="max-w-3xl mx-auto px-6 md:px-10">

        {/* Article header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className={`tag-pill ${categoryColor}`}>{article.category}</span>
            {article.trending && <span className="tag-pill bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Trending</span>}
          </div>

          <h1 className="font-display font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            {article.title}
          </h1>

          <p className="font-sans text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
            {article.excerpt}
          </p>

          {/* Author + meta */}
          <div className="flex items-center gap-4 py-5 border-y border-zinc-100 dark:border-zinc-800">
            <img src={article.author.avatar} alt={article.author.name} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
              <p className="font-sans font-semibold text-sm text-zinc-900 dark:text-zinc-100">{article.author.name}</p>
              <p className="font-sans text-xs text-zinc-400 mt-0.5">{article.author.role}</p>
            </div>
            <div className="text-right">
              <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400">{formatDate(article.publishedAt)}</p>
              <p className="font-sans text-xs text-zinc-400 mt-0.5">{article.readTime} min read</p>
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl mb-10">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Article content */}
        <div className="mb-12">
          {renderContent(article.content)}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10 pt-8 border-t border-zinc-100 dark:border-zinc-800">
          {article.tags.map(tag => (
            <span key={tag} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full font-sans text-xs font-medium">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author bio */}
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 mb-12 border border-zinc-100 dark:border-zinc-800">
          <div className="flex items-start gap-4">
            <img src={article.author.avatar} alt={article.author.name} className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
            <div>
              <p className="font-sans font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-0.5">{article.author.name}</p>
              <p className="font-sans text-xs text-zinc-400 mb-2">{article.author.role}</p>
              <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{article.author.bio}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="border-t border-zinc-100 dark:border-zinc-800 mt-4">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1 h-5 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
              <h2 className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">More to Read</h2>
              <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {related.map(a => (
                <ArticleCard key={a.id} article={a} onClick={onArticleClick} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}