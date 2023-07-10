/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-ki": "#024d83",
        "light-white": "rgba(255, 255, 255, 0.18)"
      },
    },
  },
  variants: {
    extend: {
      display: ['group-focus']
    },
  },
  plugins: [],
}

