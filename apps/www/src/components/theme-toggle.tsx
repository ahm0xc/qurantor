"use client";

import React from "react";
import { Tooltip, Button } from "@lemonsqueezy/wedges";
import { useTheme } from "next-themes";

import { SunIcon, MoonIcon } from "~/components/icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip sideOffset={8} content={`Click to switch to the dark theme`}>
      <Button
        variant="transparent"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        isIconOnly
      >
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Tooltip>
  );
}
