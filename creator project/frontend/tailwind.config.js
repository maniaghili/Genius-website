/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{tsx,ts}'],
  theme: {
    extend: {},
    screens:{
      lg:'992px',
      md:'640px',
      sm:'350px'
    }
  },
  plugins: [],
}
