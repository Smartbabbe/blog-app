import { Article, CATEGORY_COLORS } from '../types'
import { articles } from '../data/articles'
import ArticleCard from '../components/ArticleCard'

interface HomePageProps {
  onArticleClick: (article: Article) => void
  activeCategory: string
}

export default function HomePage({ onArticleClick, activeCategory }: HomePageProps) {
  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory)

  const featured = filtered.filter(a => a.featured)[0] || filtered[0]
  const trending = articles.filter(a => a.trending).slice(0, 4)
  const rest = filtered.filter(a => a.id !== featured?.id)
  const mainGrid = rest.slice(0, 6)
  const sidebarList = rest.slice(0, 5)

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Date line */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-zinc-200 dark:border-zinc-800">
          <p className="font-sans text-xs text-zinc-400 uppercase tracking-widest">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          {activeCategory !== 'All' && (
            <span className={`tag-pill ${CATEGORY_COLORS[activeCategory] || ''}`}>{activeCategory}</span>
          )}
        </div>

        {/* Hero layout — featured + trending sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* Featured article */}
          <div className="lg:col-span-2">
            {featured && <ArticleCard article={featured} onClick={onArticleClick} variant="featured" />}
          </div>

          {/* Trending sidebar */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-5 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
              <h2 className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">Trending</h2>
            </div>
            <div className="space-y-0 divide-y divide-zinc-100 dark:divide-zinc-800">
              {trending.map(article => (
                <ArticleCard key={article.id} article={article} onClick={onArticleClick} variant="horizontal" />
              ))}
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-5 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
          <h2 className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-100 uppercase tracking-widest">
            {activeCategory === 'All' ? 'Latest Stories' : activeCategory}
          </h2>
          <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
          <p className="font-sans text-xs text-zinc-400">{filtered.length} articles</p>
        </div>

        {/* Main content + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">

          {/* Article grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {mainGrid.map(article => (
              <ArticleCard key={article.id} article={article} onClick={onArticleClick} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">

            {/* Most read */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-4 bg-zinc-300 dark:bg-zinc-600 rounded-full" />
                <h3 className="font-sans font-bold text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Most Read</h3>
              </div>
              <div className="space-y-5">
                {articles.slice(0, 5).map(article => (
                  <ArticleCard key={article.id} article={article} onClick={onArticleClick} variant="compact" />
                ))}
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
              <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">
                The Weekly Dispatch
              </h3>
              <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                Our best stories, curated every Sunday. No noise, no spam — just good reading.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition-all"
                />
                <button className="w-full py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-sans text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-white transition-all">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Topics */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-4 bg-zinc-300 dark:bg-zinc-600 rounded-full" />
                <h3 className="font-sans font-bold text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">Topics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Design', 'Africa', 'Sleep', 'Cities', 'Books', 'Science', 'Culture', 'Food', 'Work'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full font-sans text-xs font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Load more */}
        {rest.length > 6 && (
          <div className="text-center pb-16">
            <button className="px-8 py-3 border-2 border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-xl font-sans text-sm font-semibold hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all">
              Load More Stories
            </button>
          </div>
        )}
      </div>
    </div>
  )
}