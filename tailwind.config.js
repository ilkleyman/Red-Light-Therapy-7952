/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DC2626', // Red-600
          light: '#EF4444',   // Red-500
          dark: '#B91C1C',    // Red-700
        },
        secondary: {
          DEFAULT: '#F59E0B', // Amber-500
          light: '#FCD34D',   // Amber-300
          dark: '#D97706',    // Amber-600
        },
        accent: {
          DEFAULT: '#1F2937', // Gray-800
          light: '#374151',   // Gray-700
        },
        wellness: {
          DEFAULT: '#10B981', // Emerald-500
          light: '#34D399',   // Emerald-400
          dark: '#059669',    // Emerald-600
        }
      },
    },
  },
  plugins: [],
}