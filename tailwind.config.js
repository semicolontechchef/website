/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        achemost: ["Achemost", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        bukra: ["Bukra", "sans-serif"],
        arsian: ["Arsian", "sans-serif"],
        arabic: ["Bukra", "Arsian", "sans-serif"],
      },
    },
  },
  plugins: [],
};
