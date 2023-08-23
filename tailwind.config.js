/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "root-Desaturated-Dark-Cyan": "hsl(180, 29%, 50%)",
        "root-Light-Grayish-Cyan-Background": "hsl(180, 52%, 96%)",
        "root-Light-Grayish-Cyan-Filter-Tablets": "hsl(180, 31%, 95%)",
        "root-Dark-Grayish-Cyan": "hsl(180, 8%, 52%)",
        "root-Very-Dark-Grayish-Cyan": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
