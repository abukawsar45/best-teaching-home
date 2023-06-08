/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ed42c8',

          secondary: '#28ef09',

          accent: '#ebc4fc',

          neutral: '#242433',

          'base-100': '#283248',

          info: '#77a6df',

          success: '#197148',

          warning: '#f1b53b',

          error: '#eb5842',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

