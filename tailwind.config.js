/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Customize seu tema aqui
      colors: {
        // Adicione cores customizadas se necessário
        // primary: {
        //   50: '#eff6ff',
        //   100: '#dbeafe',
        //   // ...
        // },
      },
      fontFamily: {
        // Adicione fontes customizadas se necessário
        // sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Adicione espaçamentos customizados se necessário
        // '128': '32rem',
      },
      borderRadius: {
        // Adicione border-radius customizados se necessário
      },
      boxShadow: {
        // Adicione sombras customizadas se necessário
      },
    },
  },
  plugins: [
    // Adicione plugins do Tailwind aqui se necessário
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
