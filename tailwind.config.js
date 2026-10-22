/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "16px",
        breadcrumb: "12px",
        heading: "42px",
      },
    },
  },
  plugins: [],
};
