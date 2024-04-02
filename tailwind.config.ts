import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        blue: {
          100: '#dbe5fc',
          200: '#477bf0',
          300: '#5585ee',
          400: '#2f6af3',
          'light': '#2f6af3',
          500: '#2966f4',
          'DEFAULT': '#2966f4',
          600: '#2458d4',
          'dark': '#2458d4',
          700: '#204bb4',
          800: '#1b3e94',
          900: '#173174',
        },
      },
      // Adding keyframes and animation for glowing effect
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #9CA3AF, 0 0 10px #9CA3AF, 0 0 15px #9CA3AF' },
          '25%': { boxShadow: '0 0 5px #9CA3AF, 0 0 10px #9CA3AF, 0 0 15px #9CA3AF' },
          '50%': { boxShadow: '0 0 10px #9CA3AF, 0 0 15px #9CA3AF, 0 0 20px #9CA3AF' },
          '75%': { boxShadow: '0 0 5px #9CA3AF, 0 0 10px #9CA3AF, 0 0 15px #9CA3AF' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ]
};
export default config;
