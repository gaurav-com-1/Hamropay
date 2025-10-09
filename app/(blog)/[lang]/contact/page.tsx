'use client'

import { useState, useEffect } from 'react';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import { CheckCircle } from 'lucide-react';

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export default function ContactPage({ params: { lang } }: any) {
  const [dict, setDict] = useState<Dictionary['contact_page'] | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    getDictionary(lang).then(d => setDict(d.contact_page));
  }, [lang]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
  };
  
  if (!dict) return <div className="min-h-screen"></div>;

  if (isSubmitted) {
    return (
      <div className="text-center py-20 flex flex-col items-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h1 className="text-4xl font-bold text-primary mb-2">{dict.success_title}</h1>
        <p className="text-lg text-text-secondary">{dict.success_message}</p>
      </div>
    );
  }

  return (
    // ===== THE FIX IS HERE: Changed py-12 to py-8 =====
    <div className="max-w-2xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">{dict.title}</h1>
        <p className="mt-2 text-lg text-text-secondary">{dict.subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-subtle border border-border">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary">{dict.name_label}</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary">{dict.email_label}</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary">{dict.message_label}</label>
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            value={formState.message}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:ring-primary focus:border-primary"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-secondary transition-colors duration-300">
            {dict.submit_button}
          </button>
        </div>
      </form>
    </div>
  );
}