import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { Metadata } from 'next';
import { toolsData } from '@/data/tools';
import { ToolCard } from '@/components/ToolCard';

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale }}): Promise<Metadata> {
  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.tools_page.title,
    description: dictionary.tools_page.subtitle,
  };
}

export default async function ToolsPage({ params: { lang } }: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);
  
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">{dictionary.tools_page.title}</h1>
        <p className="mt-2 text-lg text-text-secondary max-w-2xl mx-auto">{dictionary.tools_page.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {toolsData.map(tool => (
          <ToolCard 
            key={tool.id}
            tool={tool}
            lang={lang}
            variant="detailed"
            cta={dictionary.tools_page.use_tool_cta}
          />
        ))}
      </div>
    </div>
  );
}