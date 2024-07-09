import type { BaseLayoutProps } from "fumadocs-ui/layout";
import { GithubIcon, GlobeIcon } from "lucide-react";

// basic configuration here
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Docs",
  },
  links: [
    {
      text: "Website",
      url: "/",
      icon: <GlobeIcon />,
    },
    {
      text: "Github",
      url: "https://github.com/ahm0xc/qurantor",
      icon: <GithubIcon />,
    },
  ],
};
