'use client'

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Locale } from "@/i18n.config";
import { CopyEmailButton } from "./CopyEmailButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from './Logo';
import { SearchMenu } from './SearchMenu';
import Link from "next/link";
import { Globe, Menu, X, Search } from "lucide-react";

type SearchablePost = {
  id: string;
  lang: Locale;
  title: string;
  excerpt: string;
  category: string;
};

type HeaderProps = {
  lang: Locale;
  dictionary: {
    home: string;
    compare: string;
    articles: string;
    glossary: string;
    contact: string;
    tools: string;
    site_name_part1: string;
    site_name_part2: string;
    copy_email_tooltip: string;
    copy_success_message: string;
    search_category_articles: string;
  };
  searchablePosts: SearchablePost[];
};

export const Header = ({ lang, dictionary, searchablePosts }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const navPillRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isArticlePage = /^\/(en|ne)\/articles\/.+/.test(pathname);
  const isContactPage = pathname === `/${lang}/contact`;

  useEffect(() => {
    const handleScroll = () => {
      if (isSearchOpen) {
        setIsVisible(true);
        return;
      }
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } 
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } 
      else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isSearchOpen]);

  const navLinks = [
    { href: `/${lang}`, label: dictionary.home },
    { href: `/${lang}/compare`, label: dictionary.compare },
    { href: `/${lang}/articles`, label: dictionary.articles },
    { href: `/${lang}/glossary`, label: dictionary.glossary },
    { href: `/${lang}/tools`, label: dictionary.tools },
    { href: `/${lang}/contact`, label: dictionary.contact },
  ];
  
  const closeSearch = () => setIsSearchOpen(false);
  const openSearch = () => setIsSearchOpen(true);

  return (
    <>
      <header 
        className={`fixed top-5 left-0 right-0 z-40 flex justify-between sm:grid sm:grid-cols-3 items-center px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out 
          ${isVisible ? 'translate-y-0' : '-translate-y-24'}
          ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`
        }
      >
        
        {/* Column 1: Left - Logo */}
        <div className="flex justify-start">
          <div className="hidden sm:block">
            <Logo lang={lang} part1={dictionary.site_name_part1} part2={dictionary.site_name_part2} />
          </div>
          <Link href={`/${lang}`} className="sm:hidden bg-gray-900/80 backdrop-blur-md p-2.5 rounded-full shadow-lg border border-white/10">
            <Globe size={20} className="text-white" />
          </Link>
        </div>

        {/* Column 2: Center - Main Navigation (Hidden on article and contact pages) */}
        <div className="hidden sm:flex justify-center" ref={navPillRef}>
          {/* Removed the '!isContactPage' condition */}
          {!isArticlePage && (
            <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-md text-white text-sm font-medium p-2.5 rounded-full shadow-lg border border-white/10">
              <Link href={`/${lang}`} className="bg-white/10 p-2.5 rounded-full ..."><Globe size={20} /></Link>
              <button onClick={openSearch} className="bg-white/10 p-2.5 rounded-full ..."><Search size={20} /></button>
              <nav>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="px-4 py-2 text-gray-300 ...">{link.label}</Link>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Column 3: Right - Actions (Conditional UI) */}
        <div className="flex justify-end relative">
          <div className="hidden sm:flex items-center gap-2">
            {isArticlePage && (
              <button
                onClick={openSearch}
                className="flex items-center justify-center w-10 h-10 bg-gray-900/80 backdrop-blur-md rounded-full shadow-lg border border-white/10 transition-colors hover:bg-gray-700/80"
              >
                <Search size={20} className="text-white" />
              </button>
            )}
            {isContactPage && (
              <CopyEmailButton tooltipText={dictionary.copy_email_tooltip} successText={dictionary.copy_success_message} />
            )}
            <LanguageSwitcher lang={lang} />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden bg-gray-900/80 backdrop-blur-md p-2.5 rounded-full shadow-lg border border-white/10"
          >
            {isMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-3 w-56 bg-gray-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10">
              <nav className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="border-white/10 my-2" />
                <div className="flex justify-center p-1">
                  <LanguageSwitcher lang={lang} />
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <SearchMenu 
        isOpen={isSearchOpen} 
        onClose={closeSearch}
        searchablePosts={searchablePosts}
        dictionary={dictionary}
      />
    </>
  );
};