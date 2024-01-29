"use client";

import React from "react";
import Cookie from "js-cookie";
import { Sun, Moon } from "react-feather";
import { ThemeOptions } from "../Header";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./ToggleTheme.module.css";
import { LIGHT_COLORS, DARK_COLORS } from "@/constants";

interface ToggleTheme {
  initialTheme: ThemeOptions;
}

function ToggleTheme({ initialTheme }: ToggleTheme): React.ReactNode {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    Cookie.set("color-theme", nextTheme, {
      expires: 1000,
    });

    const root = document.documentElement;

    root.setAttribute("data-color-theme", nextTheme);

    const colors = nextTheme === "light" ? LIGHT_COLORS : DARK_COLORS;

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <button
      className={styles.action}
      onClick={handleClick}
    >
      {theme === "light" ? <Moon size="1.5rem" /> : <Sun size="1.5rem" />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default ToggleTheme;
