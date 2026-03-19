import { useState } from "react";
import { Article } from "../types";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

interface SearchPageProps {
  onBack: () => void;
  onArticleClick: (article: Article) => void;
}

export default function SearchPage({
  onBack,
  onArticleClick,
}: SearchPageProps) {
  const [query, setQuery] = useState("");

  const results =
    query.trim().length > 1
      ? articles.filter(
          (a) =>
            a.title.toLowerCase().includes(query.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
            a.author.name.toLowerCase().includes(query.toLowerCase()) ||
            a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
            a.category.toLowerCase().includes(query.toLowerCase()),
        )
      : [];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Back button */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-sans text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Feed
          </button>
        </div>

        <h1 className="font-display font-bold text-4xl text-zinc-900 dark:text-zinc-100 mb-8">
          Search
        </h1>

        {/* Search input */}
        <div className="relative mb-10">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories, authors, topics..."
            autoFocus
            className="w-full pl-12 pr-4 py-4 bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 focus:border-zinc-400 dark:focus:border-zinc-500 rounded-2xl text-lg text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 outline-none transition-all"
          />
        </div>

        {/* Results */}
        {query.trim().length > 1 && (
          <div>
            <p className="font-sans text-sm text-zinc-400 mb-6">
              {results.length} {results.length === 1 ? "result" : "results"} for
              "{query}"
            </p>
            {results.length > 0 ? (
              <div className="space-y-0 divide-y divide-zinc-100 dark:divide-zinc-800">
                {results.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onClick={onArticleClick}
                    variant="horizontal"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-4xl mb-3">🔍</p>
                <p className="font-display font-semibold text-xl text-zinc-700 dark:text-zinc-300">
                  No stories found
                </p>
                <p className="font-sans text-sm text-zinc-400 mt-2">
                  Try different keywords or browse by category
                </p>
              </div>
            )}
          </div>
        )}

        {/* Empty state */}
        {query.trim().length <= 1 && (
          <div className="text-center py-16 text-zinc-400">
            <p className="font-sans text-sm">
              Start typing to search 12 articles across 6 topics
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
