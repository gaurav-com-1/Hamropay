'use client'

import { AtSign } from 'lucide-react';
import toast from 'react-hot-toast';

type CopyEmailButtonProps = {
  tooltipText: string;
  successText: string;
};

export const CopyEmailButton = ({ tooltipText, successText }: CopyEmailButtonProps) => {
  const email = 'contact.support@financialblog.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success(successText, {
        style: {
          background: '#10B981', // Green
          color: 'white',
        },
        iconTheme: {
          primary: 'white',
          secondary: '#10B981',
        },
      });
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy email.');
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="flex items-center justify-center w-10 h-10 bg-gray-900/80 backdrop-blur-md rounded-full shadow-lg border border-white/10 transition-colors hover:bg-gray-700/80"
      >
        <AtSign size={20} className="text-white" />
      </button>
      
      {/* Tooltip on hover */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs font-semibold rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {tooltipText}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-b-4 border-b-gray-800"></div>
      </div>
    </div>
  );
};