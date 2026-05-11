/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        base: '#11130f',
        sand: '#ede6da',
        moss: '#6d775f',
        bark: '#3e3329',
        bronze: '#b99162'
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-manrope)', 'sans-serif']
      },
      boxShadow: {
        glass: '0 20px 50px rgba(8, 10, 8, 0.25)'
      }
    }
  },
  plugins: []
};
