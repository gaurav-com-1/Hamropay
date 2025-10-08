import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D47A1',
        'secondary': '#1565C0',
        'accent': '#42A5F5',
        'background': '#F8F9FA',
        'text-primary': '#212529',
        'text-secondary': '#495057',
        'border': '#DEE2E6',
        'toggle-blue': '#3b82f6', // A vibrant blue
        'toggle-red': '#ef4444', // A strong red
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 4px rgba(0,0,0,0.05)',
      }
    },
  },
  // Add the plugins section here
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;