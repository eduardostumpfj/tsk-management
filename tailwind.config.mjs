/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light:{
          100:'#FFFFFF',
          300:'#F8F9F8',
          500:'#DFDFDF',
          700:'#9A9A9D',
        },
        dark:{
          900:'#000000',
          700:'#121315',
          600:'#212429',
          500:'#26282D',
        },
        purple:{
          100: '#BF98F2',
          300: '#AC88DC',
          500: '#876CAA',
          900: '#2B2834',
        },
        yellow:{
          100: '#FFF97D',
          300: '#DBD560',
          500: '#DAD36F',
          900: '#333328',
        },
        salmon:{
          100: '#FF8D7D',
          300: '#E37A6B',
          500: '#B2705D',
          900: '#302828',
        },
        green:{
          100: '#7DFF9C',
          300: '#67DB84',
          500: '#46BF22',
          900: '#25352C',
        },
        pink:{
          100: '#FF7DA8',
          300: '#E36690',
          500: '#C16183',
          900: '#32262B',
        },
      },
      fontFamily:{
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        'small': '1rem',
        'normal': '2.25rem'
      },
    },
  },
  plugins: [],
};
