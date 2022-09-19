module.exports = {
  content: ["./src/componants/**/*.js", "./pages/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        hero: "url('../../public/home1.jpg')",
        candidate: "url('../../public/Candidate.jpg')",
        clients: "url('../../public/Clients.jpg')",
        join: "url('../../public/Join Us.jpg')",
      },
      padding: { "fluid-video": "56.25%" },
      colors: {
        royal: "#190873",
        accent: "#100750]",
      },
      fontfamily: {
        Britti: [`"BrittiReg"`, `"sans-serif"`],
      },

      screens: {
        xs: { max: "321px" },
        xsm: { max: "352px" },
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
