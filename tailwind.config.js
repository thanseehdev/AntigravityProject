/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#a3ff12',
        'dark-bg': '#000000',
        'dark-card': '#111111',
        'subtext': '#bfbfbf',
        'casio-blue': '#003366', // Keeping for compatibility if needed elsewhere
        'electric-blue': '#00B4D8',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'SF Pro Display', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 15px rgba(163, 255, 18, 0.3)',
        'neon-strong': '0 0 25px rgba(163, 255, 18, 0.5)',
      }
    },
  },
  plugins: [],
}
