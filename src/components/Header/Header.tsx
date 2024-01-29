import React from "react";
import clsx from "clsx";
import { Rss } from "react-feather";

import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";
import ToggleTheme from "@/components/ToggleTheme";

import styles from "./Header.module.css";

export type ThemeOptions = "light" | "dark";

type Header = React.HTMLAttributes<HTMLHeadElement> & {
  theme: ThemeOptions;
};

function Header({ theme, className, ...delegated }: Header) {
  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
        <ToggleTheme initialTheme={theme} />
      </div>
    </header>
  );
}

export default Header;
