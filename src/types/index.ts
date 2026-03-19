export interface Article {
  id: number
  title: string
  excerpt: string
  content: string
  author: Author
  category: string
  tags: string[]
  image: string
  publishedAt: string
  readTime: number
  featured?: boolean
  trending?: boolean
}

export interface Author {
  name: string
  avatar: string
  role: string
  bio: string
}

export const CATEGORIES = ['All', 'Technology', 'Design', 'Business', 'Culture', 'Science', 'Health']

export const CATEGORY_COLORS: Record<string, string> = {
  Technology: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Design: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  Business: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  Culture: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  Science: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
  Health: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
}