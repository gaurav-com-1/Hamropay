'use client'

import { ReadingProgressBar } from './ReadingProgressBar';

export const ArticleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ReadingProgressBar />
      {children}
    </>
  );
};