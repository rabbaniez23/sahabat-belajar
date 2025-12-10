/** @type {import('tailwindcss').Config} */
export default {
  // Pastikan content ini menunjuk ke semua file Vue kamu
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // INI WAJIB ADA BIAR WARNA NYALA
      colors: {
        'deep-space': '#0f172a',
        'nebula-purple': '#4c1d95',
        'starlight': '#fbbf24',
        'planet-teal': '#2dd4bf',
        'rocket-red': '#f43f5e',
      },
      fontFamily: {
        heading: ['Fredoka', 'sans-serif'],
        body: ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
}