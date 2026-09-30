/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bgZoomOut: {
          "0%, 100%": { transform: "scale(1.12)" },
          "50%": { transform: "scale(1)" },
        },
        popIn: {
          from: { transform: "translateY(15px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        bgZoomOut: "bgZoomOut 12s ease-in-out infinite",
        popIn: "popIn 0.7s ease both",
      },
    },
  },
  plugins: [],
};
