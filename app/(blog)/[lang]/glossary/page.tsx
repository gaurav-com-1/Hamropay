import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n.config"
import { glossaryData } from "@/data/glossary"
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang)
  return {
    title: dictionary.glossary.title,
    description: dictionary.glossary.subtitle,
  }
}

export default async function GlossaryPage({ params }: { params: Promise<{ lang: Locale }>}) {
  const { lang } = await params;
  const dict = await getDictionary(lang)
  const content = dict.glossary;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">{content.title}</h1>
        <p className="mt-2 text-lg text-text-secondary">{content.subtitle}</p>
      </div>

      <div className="space-y-6">
        {glossaryData.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-subtle border border-border">
            <h3 className="text-xl font-bold text-primary">{item.term[lang]}</h3>
            <p className="mt-2 text-text-secondary">{item.definition[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}