/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ".scrollbar-hide": {
        "-ms-overflow-style": "none", // IE
        "scrollbar-width": "none", // Firefox
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none", // IE
          "scrollbar-width": "none", // Firefox
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none", // Chrome
        },
      });
    },
  ],
};
