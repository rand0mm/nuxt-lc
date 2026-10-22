/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue',
    './content/**/*.{html,md,svelte,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}

