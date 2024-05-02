/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      's': '300px',
      'xs': '480px',  // Custom breakpoint for extra small screens
      'sm': '640px',  // Small screens
      'md': '768px',  // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra-large screens
      '2xl': '1536px', // 2x Extra-large screens
    }
  },
  plugins: [],
}

