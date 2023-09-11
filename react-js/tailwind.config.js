/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "content-s": "60px",
        "content-lg": "80px",
      },
      height: {
        "header-s": "60px",
        "header-lg": "80px",
      },
      minHeight: {
        "content-s": "calc(100vh - 60px)",
        "content-lg": "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
