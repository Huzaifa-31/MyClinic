/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({

    ".text-responsive-5xl": {
      fontSize: theme("fontSize.3xl"),
      "@media (min-width: 768px)": {
        fontSize: theme("fontSize.4xl"),
      },
      "@media (min-width: 1024px)": {
        fontSize: theme("fontSize.5xl"),
      },
    },
    // text-3xl md:text-4xl
    ".text-responsive-4xl": {
      fontSize: theme("fontSize.3xl"),
      "@media (min-width: 768px)": {
        fontSize: theme("fontSize.4xl"),
      },
    },
    // text-2xl md:text-3xl
    ".text-responsive-3xl": {
      fontSize: theme("fontSize.2xl"),
      "@media (min-width: 768px)": {
        fontSize: theme("fontSize.3xl"),
      },
    },
    // text-xl md:text-2xl
    ".text-responsive-2xl": {
      fontSize: theme("fontSize.xl"),
      "@media (min-width: 768px)": {
        fontSize: theme("fontSize.2xl"),
      },
    },
    // text-lg md:text-xl
    ".text-responsive-xl": {
      fontSize: theme("fontSize.lg"),
      "@media (min-width: 768px)": {
        fontSize: theme("fontSize.xl"),
      },
    },
    // text-base md:text-lg
    ".text-responsive-lg": {
      fontSize: theme("fontSize.base"),
      "@media (min-width: 768px)": {
        fontSize: theme("fontSize.lg"),
      },
    },
    // text-sm md:text-base
    ".text-responsive-base": {
      fontSize: theme("fontSize.sm"),
      "@media (min-width: 768px)": {
        fontSize: theme("fontSize.base"),
      },
    },
    // text-xs md:text-sm
    ".text-responsive-sm": {
      fontSize: theme("fontSize.xs"),
      "@media (min-width: 768px)": {
        fontSize: theme("fontSize.sm"),
      },
    },

  });
}), 
    
  ],
}