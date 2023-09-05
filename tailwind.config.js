/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      height: {
        "screen-safe": "100svh",
      },
    },
  },
  plugins: [require("daisyui")],
};
