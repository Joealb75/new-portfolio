/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 20s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0)", "-webkit-transform": "translateX(0)" },
          "100%": { transform: "translateX(-100%)", "-webkit-transform": "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
