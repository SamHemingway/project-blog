"use client";

import React from "react";
import clsx from "clsx";
import { Play, Pause, RotateCcw } from "react-feather";

import Card from "@/components/Card";
import VisuallyHidden from "@/components/VisuallyHidden";
import { motion } from "framer-motion";

import styles from "./CircularColorsDemo.module.css";

const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
];

function CircularColorsDemo() {
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);

  let timer = React.useRef(0);

  function handlePlayPause() {
    setIsRunning(!isRunning);
  }

  function handleReset() {
    setIsRunning(false);
    setTimeElapsed(0);
  }

  React.useEffect(() => {
    if (!isRunning) return;

    timer.current = window.setInterval(
      () => setTimeElapsed((t) => t + 1),
      1000
    );

    return () => {
      window.clearInterval(timer.current);
    };
  }, [isRunning]);

  const colorIndex = timeElapsed % COLORS.length;
  const selectedColor = COLORS[colorIndex];

  return (
    <Card
      as="section"
      className={styles.wrapper}
    >
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;

          return (
            <li
              className={styles.color}
              key={index}
            >
              {isSelected && (
                <motion.div
                  className={styles.selectedColorOutline}
                  layoutId="selectedColor"
                />
              )}
              <div
                className={clsx(
                  styles.colorBox,
                  isSelected && styles.selectedColorBox
                )}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button onClick={handlePlayPause}>
            {!isRunning ? <Play /> : <Pause />}
            <VisuallyHidden>Play</VisuallyHidden>
          </button>
          <button
            onClick={handleReset}
            disabled={timeElapsed === 0}
          >
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
