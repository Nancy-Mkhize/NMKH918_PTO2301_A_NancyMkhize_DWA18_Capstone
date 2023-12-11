/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'system-ui'],
    },
    extend: {
      fontSize: {
        'dynamic': "clamp(0.5rem, 5vw, 2.5rem)",
        'card': 'clamp(0.5rem, 1rem, 2.5rem)'
      },
      colors: {
        'eerie-black': '#0A1F1D',
        'rich-black': '#091C1C',
        'dark-green': '#073522',
        'mint-cream': '#FAFFFB',
        platinum: '#EAEAEA',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

