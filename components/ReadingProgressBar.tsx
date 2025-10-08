'use client'

import { useState, useEffect } from 'react';

export const ReadingProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const element = document.documentElement;
    const scrollTop = element.scrollTop || document.body.scrollTop;
    const scrollHeight = element.scrollHeight || document.body.scrollHeight;
    const clientHeight = element.clientHeight;
    
    // Calculate the scroll percentage
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div 
        className="h-full bg-primary transition-all duration-150 ease-linear"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};