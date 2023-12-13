/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Open-sans": ['"Open sans"', "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "Roboto-Serif": ['Roboto Serif', 'serif'],
        "lobster": ["Lobster", "cursive"],
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        "georgia": ['Georgia', 'Times New Roman'],
        "garamond": ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}