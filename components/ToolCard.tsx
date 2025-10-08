import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { Locale } from '@/i18n.config';

type Tool = {
  id: string;
  title: { en: string; ne: string; };
  shortDescription: { en: string; ne: string; };
  longDescription: { en: string; ne: string; };
  icon: LucideIcon;
};

type ToolCardProps = {
  tool: Tool;
  lang: Locale;
  variant: 'compact' | 'detailed';
  cta: string;
};

export const ToolCard = ({ tool, lang, variant, cta }: ToolCardProps) => {
  const isCompact = variant === 'compact';
  const linkHref = isCompact ? `/${lang}/tools` : `/${lang}/tools/${tool.id}`;

  return (
    <div className="bg-white rounded-2xl shadow-subtle border border-border p-6 flex flex-col items-start h-full">
      <div className="bg-primary/10 text-primary p-3 rounded-xl mb-4">
        <tool.icon size={isCompact ? 24 : 32} />
      </div>
      <h3 className={`font-bold text-text-primary ${isCompact ? 'text-lg' : 'text-xl'}`}>
        {tool.title[lang]}
      </h3>
      <p className={`mt-2 text-text-secondary flex-grow ${isCompact ? 'text-sm' : 'text-base'}`}>
        {isCompact ? tool.shortDescription[lang] : tool.longDescription[lang]}
      </p>
      <Link href={linkHref} className="mt-6 w-full text-center bg-primary text-white font-semibold py-2.5 px-5 rounded-lg transition-colors hover:bg-secondary">
        {cta}
      </Link>
    </div>
  );
};