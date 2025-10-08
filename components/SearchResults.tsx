import Link from 'next/link';
import { BookText, TrendingUp } from 'lucide-react'; // Using BookText as a placeholder icon
import { Locale } from '@/i18n.config';

type SearchablePost = {
  id: string;
  lang: Locale;
  title: string;
  excerpt: string;
  category: string;
};

type SearchResultsProps = {
  results: SearchablePost[];
  onClose: () => void;
  categoryTitle: string;
};

export const SearchResults = ({ results, onClose, categoryTitle }: SearchResultsProps) => {
  // Group results by category. For now, we only have one category.
  const groupedResults = results.reduce((acc, post) => {
    (acc[post.category] = acc[post.category] || []).push(post);
    return acc;
  }, {} as Record<string, SearchablePost[]>);

  if (results.length === 0) {
    return (
      <div className="p-4 text-center text-gray-400">
        No results found.
      </div>
    );
  }

  return (
    <div className="p-2">
      {Object.entries(groupedResults).map(([category, posts]) => (
        <div key={category}>
          <h3 className="flex items-center gap-2 px-2 py-1.5 text-xs font-semibold text-gray-400 uppercase">
            <TrendingUp size={14} />
            {categoryTitle}
          </h3>
          <ul>
            {posts.map(post => (
              <li key={`${post.lang}-${post.id}`}>
                <Link 
                  href={`/${post.lang}/articles/${post.id}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded-full flex-shrink-0">
                    <BookText size={16} className="text-gray-300" />
                  </div>
                  <div className="flex-grow overflow-hidden">
                    <p className="font-semibold text-white truncate">{post.title}</p>
                    <p className="text-sm text-gray-400 truncate">{post.excerpt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};