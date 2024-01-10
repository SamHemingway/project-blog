import React from "react";

import styles from "./Equation.module.css";

interface EquationTypes {
  dividend: number;
  divisor: number;
  remainder: number | null;
}

function Equation({ dividend, divisor, remainder }: EquationTypes) {
  return (
    <p className={styles.wrapper}>
      {dividend} ÷ {divisor} = {Math.floor(dividend / divisor)}
      {typeof remainder === "number" && remainder > 0 && (
        <span className={styles.remainderPhrase}>
          {" "}
          (and <span className={styles.remainderDigit}>{remainder}</span>{" "}
          leftover)
        </span>
      )}
    </p>
  );
}

export default Equation;
