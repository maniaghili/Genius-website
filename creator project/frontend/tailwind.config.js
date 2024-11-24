/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{tsx,ts}'],
  theme: {
    extend: {},
    screens:{
      lg:'992px',
      md:'760px',
      smt:'500',
      sm:'350px',
      ssm:'200px'
    }
  },
  plugins: [],
}

