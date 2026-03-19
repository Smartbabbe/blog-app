import { Article, CATEGORY_COLORS } from '../types'

interface ArticleCardProps {
  article: Article
  onClick: (article: Article) => void
  variant?: 'default' | 'featured' | 'compact' | 'horizontal'
}

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function ArticleCard({ article, onClick, variant = 'default' }: ArticleCardProps) {
  const categoryColor = CATEGORY_COLORS[article.category] || 'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400'

  if (variant === 'featured') {
    return (
      <div onClick={() => onClick(article)} className="article-card group cursor-pointer">
        <div className="relative h-72 md:h-96 overflow-hidden rounded-2xl">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className={`tag-pill ${categoryColor}`}>{article.category}</span>
              {article.trending && <span className="tag-pill bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Trending</span>}
            </div>
            <h2 className="font-display font-bold text-white text-2xl md:text-3xl leading-tight mb-3 group-hover:text-zinc-200 transition-colors">
              {article.title}
            </h2>
            <p className="font-sans text-zinc-300 text-sm leading-relaxed line-clamp-2 mb-4 hidden md:block">{article.excerpt}</p>
            <div className="flex items-center gap-3">
              <img src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full object-cover border-2 border-white/30" />
              <div>
                <p className="font-sans text-white text-xs font-semibold">{article.author.name}</p>
                <p className="font-sans text-zinc-400 text-xs">{formatDate(article.publishedAt)} · {article.readTime} min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'horizontal') {
    return (
      <div onClick={() => onClick(article)} className="article-card group flex gap-4 py-5 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
        <div className="flex-1 min-w-0">
          <span className={`tag-pill ${categoryColor} mb-2 inline-flex`}>{article.category}</span>
          <h3 className="font-display font-semibold text-zinc-900 dark:text-zinc-100 text-base leading-snug mb-1.5 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-sans">
            <span>{article.author.name}</span>
            <span>·</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span>·</span>
            <span>{article.readTime} min</span>
          </div>
        </div>
        <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden rounded-xl">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div onClick={() => onClick(article)} className="article-card flex gap-3 items-start">
        <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
          <span className="font-mono text-xs font-bold text-zinc-300 dark:text-zinc-600">0{article.id % 9 + 1}</span>
        </div>
        <div>
          <h4 className="font-display font-semibold text-zinc-900 dark:text-zinc-100 text-sm leading-snug mb-1 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
            {article.title}
          </h4>
          <p className="font-sans text-zinc-400 text-xs">{article.author.name} · {article.readTime} min</p>
        </div>
      </div>
    )
  }

  // Default card
  return (
    <div onClick={() => onClick(article)} className="article-card group">
      <div className="relative h-48 overflow-hidden rounded-xl mb-4">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {article.trending && (
          <div className="absolute top-3 left-3">
            <span className="tag-pill bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Trending</span>
          </div>
        )}
      </div>
      <div>
        <span className={`tag-pill ${categoryColor} mb-3 inline-flex`}>{article.category}</span>
        <h3 className="font-display font-semibold text-zinc-900 dark:text-zinc-100 text-lg leading-snug mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
          {article.title}
        </h3>
        <p className="font-sans text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-4">{article.excerpt}</p>
        <div className="flex items-center gap-2">
          <img src={article.author.avatar} alt={article.author.name} className="w-7 h-7 rounded-full object-cover" />
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-sans">
            <span className="font-medium text-zinc-600 dark:text-zinc-400">{article.author.name}</span>
            <span>·</span>
            <span>{formatDate(article.publishedAt)}</span>
            <span>·</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  )
}