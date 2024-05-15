/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'var-primary': '#335CA6',
        'Body-text-color': '#585757',
        'var-secondary': '#191818',
        'Neutral-color-2': ' #959595 ',
        'light-color': '#FAFAFC',
        'Hover-tint': ' #1F2E4C',
      },
      fontFamily: {
        'Open-sans': ['"Open sans"', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'Roboto-Serif': ['Roboto Serif', 'serif'],
        lobster: ['Lobster', 'cursive'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
        georgia: ['Georgia', 'Times New Roman'],
        garamond: ['Cormorant Garamond', 'serif'],
        Lato: ['Lato', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
