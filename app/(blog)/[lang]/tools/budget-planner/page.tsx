'use client'

import { useState, useEffect, useMemo } from 'react';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { ArrowUpCircle, ArrowDownCircle, Wallet, X } from 'lucide-react';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

type Transaction = {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
};

export default function BudgetPlannerPage({ params: { lang } }: any) {
  const [dict, setDict] = useState<Dictionary['budget_planner_page'] | null>(null);

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState<'income' | 'expense'>('expense');

  useEffect(() => {
    getDictionary(lang).then(d => setDict(d.budget_planner_page));
  }, [lang]);

  // Calculate totals using useMemo for performance
  const { totalIncome, totalExpenses, remainingBalance } = useMemo(() => {
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
    return {
      totalIncome: income,
      totalExpenses: expenses,
      remainingBalance: income - expenses,
    };
  }, [transactions]);

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);
    if (!description || !numAmount || numAmount <= 0) return;

    const newTransaction: Transaction = {
      id: Date.now(),
      description,
      amount: numAmount,
      type: transactionType,
    };

    setTransactions([newTransaction, ...transactions]);
    setDescription('');
    setAmount('');
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };
  
  if (!dict) return <div className="min-h-screen"></div>;

  const summaryCards = [
    { title: dict.total_income, value: formatCurrency(totalIncome), color: 'text-green-500', icon: ArrowUpCircle },
    { title: dict.total_expenses, value: formatCurrency(totalExpenses), color: 'text-red-500', icon: ArrowDownCircle },
    { title: dict.remaining_balance, value: formatCurrency(remainingBalance), color: 'text-primary', icon: Wallet },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">{dict.title}</h1>
        <p className="mt-2 text-lg text-text-secondary">{dict.subtitle}</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {summaryCards.map(card => (
          <div key={card.title} className="bg-white p-6 rounded-2xl shadow-subtle border border-border">
            <div className="flex items-center gap-4">
              <card.icon className={`w-8 h-8 ${card.color}`} />
              <div>
                <p className="text-sm text-text-secondary">{card.title}</p>
                <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content: Form and Transaction List */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Column: Add Transaction Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-2xl shadow-subtle border border-border">
            <h2 className="text-lg font-bold text-text-primary mb-4">{dict.add_transaction}</h2>
            <form onSubmit={handleAddTransaction} className="space-y-4">
              <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg">
                <button type="button" onClick={() => setTransactionType('income')} className={`py-2 rounded-md font-semibold transition-colors ${transactionType === 'income' ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}>{dict.income}</button>
                <button type="button" onClick={() => setTransactionType('expense')} className={`py-2 rounded-md font-semibold transition-colors ${transactionType === 'expense' ? 'bg-red-500 text-white' : 'hover:bg-gray-200'}`}>{dict.expense}</button>
              </div>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder={dict.description_placeholder} required className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary"/>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder={dict.amount_placeholder} required min="0.01" step="0.01" className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary"/>
              <button type="submit" className="w-full bg-primary text-white font-bold py-2.5 rounded-lg hover:bg-secondary transition-colors">{dict.add_button}</button>
            </form>
          </div>
        </div>

        {/* Right Column: Transaction List */}
        <div className="lg:col-span-3">
          <div className="bg-white p-6 rounded-2xl shadow-subtle border border-border">
            <h2 className="text-lg font-bold text-text-primary mb-4">{dict.recent_transactions}</h2>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {transactions.length > 0 ? (
                transactions.map(t => (
                  <div key={t.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      {t.type === 'income' ? <ArrowUpCircle className="w-5 h-5 text-green-500"/> : <ArrowDownCircle className="w-5 h-5 text-red-500"/>}
                      <span>{t.description}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`font-semibold ${t.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>{t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}</span>
                      <button onClick={() => handleDeleteTransaction(t.id)} className="text-gray-400 hover:text-red-500"><X size={16} /></button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-text-secondary py-8">{dict.no_transactions}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}