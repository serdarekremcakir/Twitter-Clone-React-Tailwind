/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main': '#1d9bf0',
        'main-hover':'rgb(26,140,216)',
        'text' : '#0f1419',
        'subtext' : '#526471',
        'logo-hover': 'rgba(29,55,140,0.1)',
        'input' : '#eff3f4'
      }
    },
    
  },
  plugins: [],
}
