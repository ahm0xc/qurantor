"use client";

import { Button, Tooltip } from "@lemonsqueezy/wedges";
import { useTheme } from "next-themes";
import React from "react";

import { MoonIcon, SunIcon } from "~/components/icons";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Tooltip sideOffset={8} content={"Click to switch to the dark theme"}>
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
