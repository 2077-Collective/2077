/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      black: "#0B0B0B",
      white: "#fff",
      green: {
        light: "#48EE95",
        DEFAULT: "#28EB83",
        dark: "#0AD86A",
      },
      gray: {
        DEFAULT: "#F5F5F5",
        one: "#e5e7eb",
        two: "#d1d5db",
        three: "#9ca3af",
        four: "#6b7280",
        five: "#4b5563",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ibmMedium: ["IBM-medium", "monospace"],
        ibmSemi: ["IBM-semi", "monospace"],
        keania: ["Keania One"],
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
