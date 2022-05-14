module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        tabletPattern: "url(../images/bg-tablet-pattern.svg)",
        simplifySectionDesktop:
          "url(../images/bg-simplify-section-desktop.svg)",
        simplifySectionMobile: "url(../images/bg-simplify-section-mobile.svg)",
      },
      colors: {
        primary: "hsl(12, 88%, 59%)",
        secondary: "hsl(228, 39%, 23%)",
        primaryLight: "hsl(12, 88%, 75%)",
        grayishBlue: "hsl(227, 12%, 61%)",
        darkBlue: "hsl(233, 12%, 13%)",
        paleRed: "hsl(13, 100%, 96%)",
        lightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        beVietnam: [`'BeVietnam', sans-serif`],
      },
      screens: {
        lg: "1024px",
        "2xl": "1600px",
      },
    },
  },
  plugins: [],
};
