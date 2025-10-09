import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { Locale } from '@/i18n.config'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData(lang: Locale) {
  const langDirectory = path.join(postsDirectory, lang);
  const fileNames = fs.readdirSync(langDirectory)
  
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(langDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as { 
        title: string; 
        date: string; 
        excerpt: string; 
        coverImage: string; 
        author: string; 
        readTime: string; 
        featured?: boolean;
      })
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    else return -1;
  })
}

export function getAllPostIds() {
    const locales: Locale[] = ['en', 'ne'];
    const paths: { params: { lang: string; id: string } }[] = [];

    locales.forEach(lang => {
        const langDirectory = path.join(postsDirectory, lang);
        try {
            const fileNames = fs.readdirSync(langDirectory);
            fileNames.forEach(fileName => {
                paths.push({
                    params: {
                        lang: lang,
                        id: fileName.replace(/\.md$/, '')
                    }
                });
            });
        } catch { // FIX: Removed unused error variable
            console.warn(`Directory not found for language: ${lang}. Skipping.`);
        }
    });

    return paths;
}

export async function getPostData(lang: Locale, id: string) {
    const fullPath = path.join(postsDirectory, lang, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...(matterResult.data as { 
            title: string; 
            date: string; 
            coverImage: string;
            author: string;
            readTime: string;
        }),
    };
}

export function getPostsForSearch() {
  const locales: Locale[] = ['en', 'ne'];
  const allPosts: { id: string; lang: Locale; title: string; excerpt: string; category: string; }[] = [];

  locales.forEach(lang => {
      const langDirectory = path.join(postsDirectory, lang);
      try {
          const fileNames = fs.readdirSync(langDirectory);
          fileNames.forEach(fileName => {
              const id = fileName.replace(/\.md$/, '');
              const fullPath = path.join(langDirectory, fileName);
              const fileContents = fs.readFileSync(fullPath, 'utf8');
              const { data } = matter(fileContents);
              allPosts.push({
                  id,
                  lang,
                  title: data.title || '',
                  excerpt: data.excerpt || '',
                  category: 'Articles'
              });
          });
      } catch { // FIX: Removed unused error variable
          console.warn(`Could not read posts for language: ${lang}`);
      }
  });

  return allPosts;
}