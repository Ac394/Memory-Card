/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-minion": "#F5E050",
        "yellow-dark-minion": "#F6C616",
        "blue-light-minion": "#115695",
        "blue-dark-minion": "#0C457A",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
