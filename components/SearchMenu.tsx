'use client'

import { useState, useEffect, useRef } from 'react';
import { Locale } from '@/i18n.config';
import { Search, X } from 'lucide-react';
import { SearchResults } from './SearchResults';

type SearchablePost = {
  id: string; lang: Locale; title: string; excerpt: string; category: string;
};

type SearchMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  searchablePosts: SearchablePost[];
  dictionary: { search_category_articles: string; };
};

export const SearchMenu = ({ isOpen, onClose, searchablePosts, dictionary }: SearchMenuProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchablePost[]>([]);
  const menuCardRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when menu opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      // Clear query when closing for a clean state next time
      setQuery('');
    }
  }, [isOpen]);
  
  // Effect to close on ESC or outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuCardRef.current && !menuCardRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Effect to filter posts based on query
  useEffect(() => {
    if (query.length > 1) {
      const lowerCaseQuery = query.toLowerCase();
      const filteredPosts = searchablePosts.filter(
        post =>
          post.title.toLowerCase().includes(lowerCaseQuery) ||
          post.excerpt.toLowerCase().includes(lowerCaseQuery)
      );
      setResults(filteredPosts.slice(0, 5));
    } else {
      setResults([]);
    }
  }, [query, searchablePosts]);

  return (
    // Full-screen backdrop with animation
    <div
      className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`
      }
    >
      {/* Search card container with slide-down animation */}
      <div
        ref={menuCardRef}
        className={`bg-[#1c1c1c] rounded-xl shadow-2xl border border-white/20 transition-transform duration-300 ease-in-out w-[90%] max-w-2xl mx-auto mt-20
          ${isOpen ? 'translate-y-0' : '-translate-y-10'}`
        }
      >
        {/* Search Input Section */}
        <div className="flex items-center gap-4 p-4 border-b border-white/10">
          <Search size={22} className="text-gray-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search articles, topics, and more..."
            className="w-full h-full bg-transparent text-white text-lg placeholder-gray-400 focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Results Section */}
        {query.length > 1 && (
          <div className="max-h-[400px] overflow-y-auto">
            <SearchResults 
              results={results} 
              onClose={onClose}
              categoryTitle={dictionary.search_category_articles}
            />
          </div>
        )}
      </div>
    </div>
  );
};