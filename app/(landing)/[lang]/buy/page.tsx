'use client'

import { useState, useEffect } from 'react';
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import Link from 'next/link';
import { Phone, Mail } from 'lucide-react'; // Removed unused CloseIcon
import { ParticleCanvas } from '@/components/ParticleCanvas';

// Define the type for our dictionary slice
type BuyPageDictionary = Awaited<ReturnType<typeof getDictionary>>['buy_page'];

// Wrapper function to fetch data in a client component
async function getPageDictionary(lang: Locale) {
  return await getDictionary(lang);
}

export default function BuyPage({ params: { lang } }: { params: { lang: Locale }}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Give the state a proper type instead of 'any'
  const [dict, setDict] = useState<BuyPageDictionary | null>(null);

  useEffect(() => {
    getPageDictionary(lang).then(d => setDict(d.buy_page));
  }, [lang]);

  if (!dict) {
    return <div className="bg-[#0c0c0c] min-h-screen"></div>; // Loading state
  }
  
  return (
    <>
      <ParticleCanvas />
      
      <div className="bg-[#0c0c0c] text-white flex flex-col min-h-screen overflow-x-hidden antialiased">
        <header className="flex flex-col sm:flex-row justify-between items-center p-5 w-full sm:px-[5%]">
            <div className="flex items-center gap-5 text-lg">
                <Phone size={20} />
                <span>{dict.phone}</span>
            </div>
            <div className="hidden md:flex items-center gap-5 text-lg">
                <Mail size={20} />
                <span>{dict.email}</span>
            </div>
        </header>
        
        <main className="flex-grow flex flex-col justify-center items-center text-center p-5">
            <div className="bg-[#d5232f] text-white py-2 px-8 rounded-md font-black text-2xl lg:text-[3.5rem] mb-6 mt-16 shadow-[0_4px_15px_rgba(229,68,79,0.2)]">
                {dict.for_sale_tag}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[6rem] font-black tracking-tighter break-words -mt-2">
                {dict.domain_name}
            </h1>
            <div className="flex items-center gap-4 my-6 text-xl lg:text-[1.9rem]">
                <p>{dict.estimated_value}</p>
                <span className="bg-[#197a41] text-white py-2 px-5 rounded-md font-extrabold text-lg lg:text-[1.5rem] shadow-[0_10px_15px_rgba(146,152,32,0.2)]">
                    {dict.price}
                </span>
            </div>
            <p className="max-w-3xl leading-relaxed text-lg lg:text-xl my-4 mb-6 text-gray-300">
                {dict.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-5">
                <Link href={`/${lang}`} className="bg-[#e8e8e8] text-[#1a1a1a] py-4 px-10 rounded-md font-bold uppercase text-base tracking-wider transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
                    {dict.go_to_blog}
                </Link>
                <button onClick={() => setIsModalOpen(true)} className="bg-[#e8e8e8] text-[#1a1a1a] py-4 px-10 rounded-md font-bold uppercase text-base tracking-wider transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
                    {dict.make_an_offer}
                </button>
            </div>
        </main>
        
        <footer className="p-6 text-center text-xs text-gray-500 w-full">
            <p>{dict.copyright}</p>
        </footer>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-opacity duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-[#1a1a1a] p-10 rounded-xl w-full max-w-md relative shadow-2xl border border-gray-700 transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-4 text-gray-400 text-4xl hover:text-white transition-colors">
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
            <div className="flex items-center gap-4 mb-5 text-lg">
                <Phone size={24} className="text-green-500" />
                <span className="text-gray-300">{dict.phone}</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
                <Mail size={24} className="text-green-500" />
                <span className="text-gray-300">{dict.email}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}