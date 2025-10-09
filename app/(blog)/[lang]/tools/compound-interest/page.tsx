'use client'

import { useState, useEffect } from 'react';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { useParams } from 'next/navigation';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

const InputField = ({ label, value, onChange, currency = false }: { label: string, value: string | number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, currency?: boolean }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-text-secondary mb-1">{label}</label>
    <div className="relative">
      {currency && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>}
      <input
        type="number"
        value={value}
        onChange={onChange}
        className={`w-full py-2 border-b-2 bg-transparent focus:outline-none focus:border-primary transition-colors ${currency ? 'pl-7' : 'pl-2'}`}
      />
    </div>
  </div>
);

export default function CompoundInterestPage() {
  const { lang } = useParams<{ lang: Locale }>();
  const [dict, setDict] = useState<Dictionary['compound_interest_page'] | null>(null);

  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [years, setYears] = useState(10);
  const [interestRate, setInterestRate] = useState(7);
  const [compoundingFrequency, setCompoundingFrequency] = useState(12);

  useEffect(() => {
    getDictionary(lang).then(d => setDict(d.compound_interest_page));
  }, [lang]);

  const ratePerPeriod = (interestRate / 100) / compoundingFrequency;
  const numberOfPeriods = years * compoundingFrequency;
  const monthlyRateForContributions = (interestRate / 100) / 12;

  const futureValueOfPrincipal = initialInvestment * Math.pow(1 + ratePerPeriod, numberOfPeriods);
  
  let futureValueOfContributions = 0;
  if (monthlyContribution > 0 && monthlyRateForContributions > 0) {
    futureValueOfContributions = monthlyContribution * ((Math.pow(1 + monthlyRateForContributions, years * 12) - 1) / monthlyRateForContributions);
  } else if (monthlyContribution > 0) {
    futureValueOfContributions = monthlyContribution * years * 12;
  }

  const futureValue = futureValueOfPrincipal + futureValueOfContributions;
  const totalContributions = initialInvestment + (monthlyContribution * years * 12);
  const totalInterest = futureValue - totalContributions;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
  };

  if (!dict) return <div className="min-h-screen"></div>;

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-black">{dict.title}</h1>
      </div>

      <div className="max-w-5xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-subtle border border-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{dict.subtitle}</h2>
              <p className="text-sm text-gray-500 mt-1">{dict.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField label={dict.initial_investment} value={initialInvestment} onChange={(e) => setInitialInvestment(Number(e.target.value))} currency />
              <InputField label={dict.monthly_contribution} value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} currency />
              <InputField label={dict.years_to_grow} value={years} onChange={(e) => setYears(Number(e.target.value))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">{dict.annual_interest_rate}</label>
              <div className="flex items-center gap-4">
                <input type="range" min="1" max="20" step="0.5" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"/>
                <span className="font-bold text-primary w-16 text-right">{interestRate}%</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">{dict.compounding_frequency}</label>
              <select value={compoundingFrequency} onChange={(e) => setCompoundingFrequency(Number(e.target.value))} className="w-full py-2 bg-transparent border-b-2 focus:outline-none focus:border-primary transition-colors">
                <option value="1">{dict.frequencies.annually}</option>
                <option value="2">{dict.frequencies.semi_annually}</option>
                <option value="4">{dict.frequencies.quarterly}</option>
                <option value="12">{dict.frequencies.monthly}</option>
              </select>
            </div>
          </div>

          <div className="bg-primary text-white p-6 rounded-2xl flex flex-col">
            <h2 className="text-xl font-bold text-white">{dict.estimated_savings}</h2>
            
            <div className="flex-grow space-y-4 mt-6">
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="text-gray-200">{dict.total_contributions}</span>
                <span className="font-bold text-lg">{formatCurrency(totalContributions)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-200">{dict.total_interest}</span>
                <span className="font-bold text-lg text-green-300">{formatCurrency(totalInterest)}</span>
              </div>
            </div>

            <div className="mt-8 bg-accent text-primary p-4 rounded-lg text-center">
              <span className="text-sm font-semibold">{dict.estimated_savings}</span>
              <p className="text-2xl font-bold">{formatCurrency(futureValue)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}