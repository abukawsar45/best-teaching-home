/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#63eda8',

          secondary: '#8506e5',

          accent: '#cdf47f',

          neutral: '#222032',

          'base-100': '#2b2f4a',

          info: '#5eadcf',

          success: '#15704e',

          warning: '#d3ab0d',

          error: '#dc3863',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

