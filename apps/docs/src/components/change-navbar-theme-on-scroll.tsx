import * as React from "react";

export default function ChangeNavbarThemeOnScroll() {
  React.useEffect(() => {
    function handler() {
      const el = document.querySelector(
        ".nextra-nav-container .nextra-nav-container-blur"
      );
      if (!el) return;

      if (window.scrollY > 10 && !el.classList.contains("dim-bg")) {
        el.classList.add("dim-bg");
      }
      if (window.scrollY < 10 && el.classList.contains("dim-bg")) {
        el.classList.remove("dim-bg");
      }
    }
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return null;
}
