/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00c2cb",
          secondary: "#003cff",
          accent: "#d14b00",
          neutral: "#070707",
          "base-100": "#fffae6",
          info: "#00e3ff",
          success: "#00a900",
          warning: "#ffb500",
          error: "#ff004a",
        },
      },
      "light",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
