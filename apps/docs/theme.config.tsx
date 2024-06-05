import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Qurantor Docs</span>,
  docsRepositoryBase: "https://github.com/ahm0xc",
  footer: {
    text: "Qurantor",
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  primaryHue: 141,
  primarySaturation: 53,
  navigation: {
    prev: true,
    next: true,
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },
};

export default config;
