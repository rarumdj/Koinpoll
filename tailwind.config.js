module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#AA70FE",
        secondary: "#3C38FF",
      },
      backgroundColor: {
        primary: "#AA70FE",
        secondary: "#3C38FF",
        navColor: "#1A222E",
      },
      borderColor: {
        primary: "#AA70FE",
        secondary: "#3C38FF",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateY(-500px)",
            transform: "translateY(-500px)",
          },
          "100%": {
            "-webkit-transform": "translateY(0px)",
            transform: "translateY(0px)",
          },
        },

        "slide-out": {
          "100%": {
            "-webkit-transform": "translateY(0px)",
            transform: "translateY(0px)",
          },
          "0%": {
            "-webkit-transform": "translateY(-500px)",
            transform: "translateY(-500px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateZ(0px)",
            transform: "translateZ(0px)",
          },
          "100%": {
            "-webkit-transform": "translateZ(160px)",
            transform: "translateZ(160px)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in .8s ease-out",
        "slide-out": "slide-out.8s ease-in",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  plugins: [],
};
