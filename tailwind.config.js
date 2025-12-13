// tailwind.config.js (in the root directory)
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'montserrat': ['Montserrat', 'sans-serif'],
          'lato': ['Lato', 'sans-serif'],
          'cabin': ['Cabin', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }