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
        interRegular: ['Inter-regular', 'sans-serif'],
        interMedium: ['Inter-medium', 'sans-serif'],
        interSemi: ['Inter-semi', 'sans-serif'],
        interBold: ['Inter-bold', 'sans-serif'],
        interExtraBold: ['Inter-extraBold', 'sans-serif'],
        interBlack: ['Inter-black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

