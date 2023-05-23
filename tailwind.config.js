/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctor_portal: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#37CDBE",
          neutral: "#3D4451",
          error: "#F96C7A",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}