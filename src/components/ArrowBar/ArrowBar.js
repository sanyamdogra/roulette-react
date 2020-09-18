import React from "react";
import styles from "./ArrowBar.module.css";
import { ReactComponent as ArrowBarSkeleton } from "../../assets/arrowBar.svg";

const ArrowBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.threshold}></div>
      <ArrowBarSkeleton>
        <svg>
          <style>
            fill:linear-gradient(90deg, #E23A3A -5.09%, #DBD174 44.46%, #148E2F
            87.58%)
          </style>
        </svg>
      </ArrowBarSkeleton>
    </div>
  );
};

export default ArrowBar;
