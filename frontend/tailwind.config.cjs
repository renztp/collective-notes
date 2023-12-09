/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cn-text': '#181519',
        'cn-bg': '#F0EEF1',
        'cn-primary': '#B7C0B4',
        'cn-secondary': '#D3DAD4',
        'cn-accent': '#757A66',
        'cn-sidebar-header': '#AC9B9B',
      },
    },
  },
  plugins: [],
}

