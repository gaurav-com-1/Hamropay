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
    // Remove ".md" from file name to get id (slug)
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(langDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
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

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

/**
 * Gets all possible paths for blog posts across all languages.
 * This is used by Next.js for generating static pages at build time.
 */
export function getAllPostIds() {
    const locales: Locale[] = ['en', 'ne'];
    let paths: { params: { lang: string; id: string } }[] = [];

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
        } catch (error) {
            console.warn(`Directory not found for language: ${lang}. Skipping.`);
        }
    });

    return paths;
}

/**
 * Reads a single post's data and content by its ID (slug) and language.
 * It also converts the Markdown content into an HTML string.
 */
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

/**
 * Gets a lightweight list of all posts across all languages for client-side search.
 */
export function getPostsForSearch() {
  const locales: Locale[] = ['en', 'ne'];
  let allPosts: { id: string; lang: Locale; title: string; excerpt: string; category: string; }[] = [];

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
                  category: 'Articles' // Assign a default category
              });
          });
      } catch (error) {
          console.warn(`Could not read posts for language: ${lang}`);
      }
  });

  return allPosts;
}