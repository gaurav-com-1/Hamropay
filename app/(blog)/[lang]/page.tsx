import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import Image from "next/image";
import { toolsData } from '@/data/tools';
import { ToolCard } from '@/components/ToolCard'; 

export default async function Home({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  const allPosts = getSortedPostsData(lang);

  const mainPost = allPosts[0];
  const featuredPosts = allPosts.filter(post => post.featured).slice(0, 5);
  const recentPosts = allPosts.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Top Section: Main post + Dynamic Featured Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Main Post */}
        <div className="lg:col-span-2">
          {mainPost && (
            <Link href={`/${lang}/articles/${mainPost.id}`} className="group flex flex-col gap-4">
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={mainPost.coverImage}
                  alt={mainPost.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  priority
                />
              </div>

              {/* Text content wrapper */}
              <div className="flex flex-col gap-2">
                {/* ADDED: Metadata line for Author and Date */}
                <div className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                  <span className="text-red-500 font-bold">Scam Alert</span>
                  <span>&bull;</span>
                  <span>{mainPost.date}</span>
                </div>

                {/* Title (Unchanged) */}
                <h2 className="text-2xl md:text-3xl font-bold leading-tight text-text-primary group-hover:text-primary transition-colors">
                  {mainPost.title}
                </h2>

                {/* ADDED: Excerpt/Summary */}
                <p className="text-base text-text-secondary line-clamp-2">
                  {mainPost.excerpt}
                </p>
              </div>
            </Link>
          )}
        </div>
        {/* ======================= END OF THE FIX SECTION ======================= */}

        {/* Dynamic Sidebar (Unchanged) */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-subtle border border-border">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-text-primary">{dictionary.home.domain_sale_title}</h3>
              <div className="mt-2 h-0.5 w-12 bg-red-500"></div>
            </div>
            <Link href={`/${lang}/buy`} className="block w-full text-center bg-gray-800 text-white font-semibold py-3 px-5 rounded-lg transition-colors hover:bg-gray-700">
              {dictionary.home.view_details_cta}
            </Link>
          </div>
          {featuredPosts.length > 0 && (
            <div className="bg-white p-6 rounded-2xl shadow-subtle border border-border">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-text-primary">{dictionary.home.featured_post_title}</h3>
                <div className="mt-2 h-0.5 w-12 bg-red-500"></div>
              </div>
              <div className="space-y-5">
                {featuredPosts.map(post => (
                  <Link href={`/${lang}/articles/${post.id}`} key={post.id} className="group flex items-center gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-secondary group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Separator (Unchanged) */}
      <div className="border-t border-border"></div>

      {/* Recent Posts Section (Unchanged) */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-text-primary">{dictionary.home.recent_posts}</h2>
          <Link href={`/${lang}/articles`} className="text-primary font-semibold hover:underline">
            {dictionary.home.all_posts}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map(post => (
            <Link href={`/${lang}/articles/${post.id}`} key={post.id} className="group bg-white rounded-2xl shadow-subtle border border-border overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative w-full h-52">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-text-secondary line-clamp-3 flex-grow">{post.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                  <span className="text-sm text-text-secondary font-medium">{post.author}</span>
                  <span className="text-gray-400">&bull;</span>
                  <span className="text-sm text-text-secondary">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Tools */}
      <div className="border-t border-border"></div>
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary">{dictionary.home.tools_section_title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map(tool => (
            <ToolCard 
              key={tool.id}
              tool={tool}
              lang={lang}
              variant="compact"
              cta={dictionary.tools_page.try_out_cta}
            />
          ))}
        </div>
      </section>
    </div>
  );
}