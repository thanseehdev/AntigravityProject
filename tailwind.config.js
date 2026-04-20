/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'casio-blue': '#003366', // Deep Luxury Navy
        'casio-soft-blue': '#2B4A7E', 
        'casio-bg': '#F8F9FA', // Soft Porcelain
        'premium-black': '#1A1A1A', 
        'premium-white': '#FFFFFF',
        'premium-gray': '#E9ECEF', 
        'accent-gold': '#C5A059', // Metallic Gold
        'electric-blue': '#00B4D8', // Vibrant Accent
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
