/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "azul-marino": "#192841",
        "gris-oscuro": "#37474F",
        "azul-medianoche": "#2C3E50",
        "gris-plateado": "#BDC3C7",
        "gris-claro": "#ECF0F1",
        "azul-claro": "#3498DB",
      },
    },
  },
  plugins: [],
};
