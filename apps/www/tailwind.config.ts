import type { Config } from "tailwindcss";
import { wedgesPalette as palette, wedgesTW } from "@lemonsqueezy/wedges";

const config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwind-scrollbar-hide'),
    wedgesTW({
      prefix: "wg",
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            background: palette.white,
            foreground: palette.gray[900],
            primary: {
              DEFAULT: "#204ccf",
              "100": "#e7eefc",
              "200": "#c3d9f7",
              "300": "#99b3e5",
              "400": "#7090d3",
              "500": "#466cc1",
              "600": "#204ccf",
              "700": "#003399",
              "800": "#002266",
              "900": "#001133",
            },
          },
        },
        dark: {
          colors: {
            background: palette.gray[900],
            foreground: palette.gray[100],
            primary: {
              ...palette.blue,
              DEFAULT: palette.blue[600],
            },
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
