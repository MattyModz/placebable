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
        p2topbg: "url('../../public/p2/Top Background.svg')",
        p2topbgmd: "url('../../public/p2/Top Backgroundmd.svg')",
        p2btmbg: "url('../../public/p2/Bottom Background.svg')",
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
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
