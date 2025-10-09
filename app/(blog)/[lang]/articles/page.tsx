import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import { Metadata } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }>}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return {
    title: dictionary.articles.title,
    description: dictionary.articles.subtitle,
  };
}

export default async function ArticlesPage({ params }: { params: Promise<{ lang: string }>}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  const posts = getSortedPostsData(lang as Locale);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">{dict.articles.title}</h1>
        <p className="mt-2 text-lg text-text-secondary">{dict.articles.subtitle}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ id, title, excerpt, coverImage }) => (
          <Link href={`/${lang}/articles/${id}`} key={id} className="group block bg-white rounded-xl shadow-subtle border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="relative w-full h-48">
              <Image
                src={coverImage}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary">{title}</h3>
              <p className="text-text-secondary line-clamp-3">{excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}