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
        lightest: "#e5e7eb",
        lighter: "#d1d5db",
        light: "#9ca3af",
        DEFAULT: "#F5F5F5",
        dark: "#6b7280",
        darker: "#4b5563",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ibm: ["IBM", "monospace"],
        keania: ["Keania One"],
      },
      maxWidth: {
        "screen-xl": "296px",
        "screen-2xl": "600px",
        "screen-3xl": "720px",
        "screen-4xl": "840px",
      },
    },
  },
  plugins: [],
};
