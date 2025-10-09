'use client'

import { useState, useEffect } from 'react';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export default function EMICalculatorPage({ params: { lang } }: { params: { lang: Locale }}) {
  const [dict, setDict] = useState<Dictionary['emi_calculator_page'] | null>(null);

  const [loanAmount, setLoanAmount] = useState(25000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(24);

  useEffect(() => {
    getDictionary(lang).then(d => setDict(d.emi_calculator_page));
  }, [lang]);

  // --- Calculation Logic ---
  const monthlyRate = interestRate / 12 / 100;
  let emi = 0;
  if (monthlyRate > 0) {
    emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  } else {
    emi = loanAmount / tenure;
  }
  const totalRepayment = emi * tenure;
  const totalInterest = totalRepayment - loanAmount;

  // --- Chart Configuration ---
  const chartData = {
    labels: [dict?.principal, dict?.interest],
    datasets: [
      {
        data: [loanAmount, totalInterest],
        backgroundColor: ['#3b82f6', '#f59e0b'], // Blue for Principal, Yellow for Interest
        borderColor: ['#ffffff'],
        borderWidth: 4,
        hoverBorderWidth: 4,
      },
    ],
  };

  const chartOptions = {
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
  };

  // --- Helper for Formatting ---
  const formatCurrency = (value: number, useCents = true) => {
    const options = useCents ? { minimumFractionDigits: 2, maximumFractionDigits: 2 } : { minimumFractionDigits: 0, maximumFractionDigits: 0 };
    return new Intl.NumberFormat('en-US', options).format(value).replace(/,/g, ' ');
  };

  if (!dict) return <div className="min-h-screen"></div>; // Loading state

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-text-primary">{dict.title}</h1>
        <p className="mt-2 text-text-secondary">{dict.disclaimer}</p>
        <hr className="mt-6 border-border" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column: Inputs */}
        <div className="space-y-8">
          {/* Loan Amount Input */}
          <div>
            <label className="text-sm font-medium text-text-primary">{dict.amount_label}</label>
            <div className="mt-2 p-4 bg-white rounded-xl border border-border">
              <div className="text-2xl font-bold text-primary">{formatCurrency(loanAmount, false)}$</div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-3 accent-primary"
              />
            </div>
          </div>
          
          {/* Loan Tenure Input */}
          <div>
            <label className="text-sm font-medium text-text-primary">{dict.tenure_label}</label>
            <div className="mt-2">
              <select
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full p-4 bg-white rounded-xl border border-border appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {[12, 24, 36, 48, 60, 72].map(months => (
                  <option key={months} value={months}>{months} Months</option>
                ))}
              </select>
            </div>
          </div>

          {/* Interest Rate Input (Added for functionality) */}
          <div>
            <label className="text-sm font-medium text-text-primary">{dict.rate_label}</label>
            <div className="mt-2 p-4 bg-white rounded-xl border border-border">
              <div className="text-2xl font-bold text-primary">{interestRate}%</div>
              <input
                type="range"
                min="1"
                max="20"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-3 accent-primary"
              />
            </div>
          </div>

          {/* EMI Result Card */}
          <div className="bg-gray-100/60 rounded-xl p-6 text-center">
            <p className="text-text-secondary">{dict.you_will_pay}</p>
            <p className="text-3xl font-bold text-primary my-1">{formatCurrency(emi)}$</p>
            <p className="text-text-secondary">{dict.per_month}</p>
          </div>
        </div>

        {/* Right Column: Chart and Breakdown */}
        <div className="bg-white rounded-2xl shadow-subtle border border-border p-8">
          <div className="relative w-full h-64 mx-auto">
            <Doughnut data={chartData} options={chartOptions} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-text-secondary text-sm">{dict.in_total}</p>
              <p className="text-3xl font-bold text-text-primary">{formatCurrency(totalRepayment, false)}$</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-6 text-center">
            <div>
              <div className="flex items-center gap-2 justify-center">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="text-sm text-text-secondary">{dict.principal}</span>
              </div>
              <p className="font-bold text-text-primary mt-1">{formatCurrency(loanAmount, false)}$</p>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="text-sm text-text-secondary">{dict.interest}</span>
              </div>
              <p className="font-bold text-text-primary mt-1">{formatCurrency(totalInterest, false)}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}