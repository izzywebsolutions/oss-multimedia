/**** Tailwind Config ****/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0F0F1A',
        lagosgold: '#E8B923',
        emerald: '#006633',
        warmgray: '#94A3B8',
      },
      fontFamily: {
        clash: ['Clash Display', 'ui-sans-serif', 'system-ui'],
        satoshi: ['Satoshi', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        ossdark: {
          primary: '#E8B923',
          secondary: '#006633',
          accent: '#006633',
          neutral: '#0F0F1A',
          'base-100': '#0B0B12',
          info: '#94A3B8',
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
    ],
    darkTheme: 'ossdark',
  },
};
