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
        candidatemob: "url('../../public/mob1.jpg')",
        clientmob: "url('../../public/mob2.jpg')",
        contactmob: "url('../../public/mob3.jpg')",
        clients: "url('../../public/Clients.jpg')",
        cfund: "url('../../public/icons/clients/clients.png')",
        cpromise: "url('../../public/p3/promise/bgasset.svg')",

        join: "url('../../public/Join Us.jpg')",
        p2topbg: "url('../../public/p2/Top Background.svg')",
        p2topbgmd: "url('../../public/p2/Top Backgroundmd.svg')",
        p2btmbg: "url('../../public/icons/clients/howit/all.svg')",
        p2bgassetsmsay: "url('../../public/p2/say/bgassetsm.svg')",
        p3bgassetsmsay: "url('../../public/p3/say/bgassetmob.svg')",
        p2bgassetmdsay: "url('../../public/p2/say/bgassetsmd.svg')",
        JT: "url('../../public/JT.png')",
        candidsaybg: "url('../../public/p3/say/bgasset.svg')",
        candidhowbg: "url('../../public/p3/howit/bgasset.svg')",
        candidhowbgmob: "url('../../public/p3/howit/bgassetmob.svg')",
        clihowbgassetmob: "url('../../public/p2/clibgassetmob.svg')",
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
        xxsm: { max: "321px" },
        xsm: { max: "352px" },

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        full: "1920px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
