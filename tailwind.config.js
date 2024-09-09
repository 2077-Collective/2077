/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    color: {
      black: "#000",
      white: "#fff",
      green: "#28EB83",
    },
    extend: {
      fontFamily: {
        inter: ['Inter-semi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

