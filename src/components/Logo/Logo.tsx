import React from "react";
import Link from "next/link";

import { BLOG_TITLE } from "@/constants";

import styles from "./Logo.module.css";

interface LogoTypes {
  mobileAlignment: "left" | "center" | "right";
}

function Logo({ mobileAlignment = "left" }: LogoTypes) {
  return (
    <Link
      href="/"
      className={styles.wrapper}
      data-mobile-alignment={mobileAlignment}
    >
      {BLOG_TITLE}
    </Link>
  );
}

export default Logo;
