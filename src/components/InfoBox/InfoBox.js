import React from "react";
import styles from "./InfoBox.module.css";

const InfoBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading}>Spin the wheel now to <br/>get rewarded</div>
        <div className={styles.subHeading}>
          Tap on Spin or rotate the wheel anti-clockwise <br/>and release to start
          spinning
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
