import React from "react";
import { Code } from "bright";

import theme from "./theme";
import styles from "./CodeSnippet.module.css";

function CodeSnippet(props: React.HTMLProps<HTMLPreElement>) {
  return (
    <Code
      {...props}
      theme={theme}
      className={styles.wrapper}
    >
      {props.children}
    </Code>
  );
}

export default CodeSnippet;
