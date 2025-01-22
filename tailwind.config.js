/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
    fontFamily: { 
      poppins : ['Poppins', 'sans-serif'],
    },
    colors: {
      "primary-color" : "#B88E2F",
      "secondary-color" : "#FFF3E3",
      "subtitle-text" : "#333333",
      "compo-bg" : "#F5F5F5"
    }
  },
},
  plugins: [],
};
