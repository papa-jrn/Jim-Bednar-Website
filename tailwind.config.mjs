/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Sampled directly from the campaign yard sign
        navy: {
          DEFAULT: '#002094',
          dark: '#00155F',
          light: '#1A3DB5',
          pale: '#E7ECFA',
        },
        flag: {
          red: '#8C0000',
          bright: '#B31414',
          pale: '#F8EAEA',
        },
        paper: '#F8FAF9',
      },
      fontFamily: {
        display: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
