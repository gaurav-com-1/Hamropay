import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import { Toaster } from 'react-hot-toast';
import { getPostsForSearch } from '@/lib/posts';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return {
    title: {
      template: `%s | ${dictionary.home.title}`,
      default: dictionary.home.title,
    },
    description: dictionary.home.subtitle,
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  const searchablePosts = getPostsForSearch();

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="bottom-center" />
      <Header 
        lang={lang as Locale} 
        dictionary={dictionary.header} 
        searchablePosts={searchablePosts} 
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        {children}
      </main>
      <Footer dictionary={dictionary.footer}/>
    </div>
  )
}