import React from "react";
import clsx from "clsx";

import styles from "./Slider.module.css";

interface SliderTypes extends React.HTMLProps<HTMLInputElement> {
  className?: string;
}

function Slider({ className, ...delegated }: SliderTypes) {
  return (
    <input
      type="range"
      className={clsx(styles.slider, className)}
      {...delegated}
    />
  );
}

export default Slider;
