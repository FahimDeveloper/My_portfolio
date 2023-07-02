/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#fa5b0f",
          "accent": "#1dcdbc",
          "neutral": "#2b3440",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        "html": "#e34c26",
        "css": "#264de4",
        "tailwind": "#38BDF8",
        "bootstrap": "#7711F7",
        "javascript": "#F0DB4F",
        "react": "#61DBFB",
        "router": "#F44250",
        "daisy": "#570EF0",
        "redux": "#764abc",
        "axios": "#671DDF",
        "node": "#026E00",
        "express": "#000000",
        "mongodb": "#4DB33D",
        "vscode": "#24ABF2",
        "git": "#FA4F28",
        "github": "#000000",
        "firebase": "#FFA712",
        "netlify": "#32E6E2",
        "vercel": "#00000",
        "reactDev": "#61DBFB",
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(html|css|tailwind|bootstrap|javascript|react|router|daisy|redux|axios|node|express|mongodb|vscode|git|github|firebase|netlify|vercel|reactDev)/,
    },
  ],
}

