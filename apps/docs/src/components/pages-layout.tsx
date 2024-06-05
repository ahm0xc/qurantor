import React from "react";
import Image from "next/image";

import BackgroundImage from "~/assets/Background main.png";
import ChangeNavbarThemeOnScroll from "~/components/change-navbar-theme-on-scroll";

export default function PagesLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Image
        src={BackgroundImage}
        style={{
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          right: 0,
          width: "75%",
          height: "75%",
          zIndex: -1,
        }}
        alt=""
      />
      <ChangeNavbarThemeOnScroll />
      {children}
    </div>
  );
}
