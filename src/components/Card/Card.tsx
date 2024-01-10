import React from "react";
import clsx from "clsx";

import styles from "./Card.module.css";

interface CardTypes extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className: string;
}

function Card({ children, className, ...delegated }: CardTypes) {
  return (
    <div
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      {children}
    </div>
  );
}

export default Card;
