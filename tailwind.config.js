/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    color: {
      black: "#000",
      white: "#fff",
      green: "#28EB83",
    },
    extend: {
      fontFamily: {
        interRegular: ["Inter-regular", "sans-serif"],
        interMedium: ["Inter-medium", "sans-serif"],
        interSemi: ["Inter-semi", "sans-serif"],
        interBold: ["Inter-bold", "sans-serif"],
        interExtraBold: ["Inter-extraBold", "sans-serif"],
        interBlack: ["Inter-black", "sans-serif"],
        ibmMedium: ["IBM-medium", "monospace"],
        ibmSemi: ["IBM-semi", "monospace"],
      },
      maxWidth: {
        "screen-2xl": "600px",
        "screen-3xl": "720px",
        "screen-4xl": "840px",
      },
    },
  },
  plugins: [],
};
