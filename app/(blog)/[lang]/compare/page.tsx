import { getDictionary } from "@/lib/dictionary"
import { Locale } from "@/i18n.config"
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale)
  return {
    title: dictionary.compare.title,
    description: dictionary.compare.subtitle,
  }
}

export default async function ComparePage({ params }: { params: Promise<{ lang: string }>}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale)
  const content = dict.compare

  const comparisonData = [
    { feature: content.transaction_fee, esewa: content.low, khalti: content.variable, imepay: content.low },
    { feature: content.bank_transfer, esewa: content.yes, khalti: content.yes, imepay: content.yes },
    { feature: content.qr_payment, esewa: content.yes, khalti: content.yes, imepay: content.yes },
    { feature: content.mobile_topup, esewa: content.yes, khalti: content.yes, imepay: content.yes },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">{content.title}</h1>
        <p className="mt-2 text-lg text-text-secondary">{content.subtitle}</p>
      </div>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow-subtle border border-border">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-border">
            <tr>
              <th className="px-6 py-4 font-semibold text-text-primary">{content.feature}</th>
              <th className="px-6 py-4 font-semibold text-text-primary">{content.esewa}</th>
              <th className="px-6 py-4 font-semibold text-text-primary">{content.khalti}</th>
              <th className="px-6 py-4 font-semibold text-text-primary">{content.imepay}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {comparisonData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-text-primary">{row.feature}</td>
                <td className="px-6 py-4 text-text-secondary">{row.esewa}</td>
                <td className="px-6 py-4 text-text-secondary">{row.khalti}</td>
                <td className="px-6 py-4 text-text-secondary">{row.imepay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}