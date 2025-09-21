/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".custom-padding": {
          padding: "100px",
          "@screen xs": {
            paddingLeft: "10px",
            paddingRight: "10px",
          },
          "@screen md": {
            paddingLeft: "50px",
            paddingRight: "50px",
          },
        },
        ".swiper-pagination": {
          width: "fit-content",
        },
      });
    },
  ],
};
