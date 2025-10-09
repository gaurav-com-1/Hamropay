import { getPostData, getAllPostIds, getSortedPostsData } from '@/lib/posts';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleLayout } from '@/components/ArticleLayout';
import { SocialShareButtons } from '@/components/SocialShareButtons';

// This is the direct props type for the generateMetadata function
type MetadataProps = {
  params: { id: string; lang: Locale };
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  try {
    const postData = await getPostData(params.lang, params.id);
    return { title: postData.title };
  } catch { // FIX: Removed unused _error variable
    return { title: 'Post Not Found' };
  }
}

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map(path => ({
        lang: path.params.lang,
        id: path.params.id
    }));
}

// ===== THE MAIN FIX IS HERE =====
// We are typing the props directly in the function signature, not with a separate type alias.
export default async function Post({ params }: { params: { id: string; lang: Locale } }) {
  try {
    const postData = await getPostData(params.lang, params.id);
    const allPosts = getSortedPostsData(params.lang);
    const dictionary = await getDictionary(params.lang);

    const relatedPosts = allPosts
      .filter(post => post.id !== params.id)
      .slice(0, 3);

    const postUrl = `https://yourdomain.com/${params.lang}/articles/${postData.id}`;
    
    return (
      <ArticleLayout>
        <div className="max-w-3xl mx-auto">
          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">{postData.title}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-text-secondary">
                <div className="text-sm">
                  <span>{postData.author}</span> &bull; <span>{postData.date}</span> &bull; <span>{postData.readTime}</span>
                </div>
                <SocialShareButtons title={postData.title} url={postUrl} />
              </div>
            </header>
            
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
                <Image
                    src={postData.coverImage}
                    alt={postData.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            <div
              className="prose prose-lg max-w-none prose-h2:text-primary prose-a:text-secondary"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>

          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-12 border-t border-border">
              <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">{dictionary.articles.related_posts}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map(post => (
                  <Link href={`/${params.lang}/articles/${post.id}`} key={post.id} className="group bg-white rounded-2xl shadow-subtle border border-border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative w-full h-40">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-md font-bold text-text-primary mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                      <div className="mt-auto pt-2 text-xs text-text-secondary">
                        <span>{post.author}</span> &bull; <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </ArticleLayout>
    );
  } catch {
    notFound();
  }
}