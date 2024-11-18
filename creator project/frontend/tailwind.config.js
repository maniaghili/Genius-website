/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{tsx,ts}'],
  theme: {
    extend: {},
    screens:{
      lg:'992px',
      md:'760px',
      sm:'350px'
    }
  },
  plugins: [],
}

