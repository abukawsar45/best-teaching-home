/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1edb50',

          secondary: '#fcbdba',

          accent: '#66ef62',

          neutral: '#1c1d31',

          'base-100': '#29274f',

          info: '#6685f5',

          success: '#28c8ab',

          warning: '#ccae14',

          error: '#f07a6a',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

