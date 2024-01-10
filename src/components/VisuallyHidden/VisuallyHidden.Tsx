import React, { ReactElement, ReactNode } from "react";
import clsx from "clsx";

import styles from "./VisuallyHidden.module.css";

interface VisuallyHiddenProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
  [key: string]: any;
}

function VisuallyHidden({
  as: Element = "span",
  className,
  children,
  ...delegated
}: VisuallyHiddenProps): ReactElement {
  return (
    <Element
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      {children}
    </Element>
  );
}

export default VisuallyHidden;
