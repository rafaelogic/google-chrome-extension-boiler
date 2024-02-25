/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}

