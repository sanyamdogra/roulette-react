import React from "react";
import styles from "./Roulette.module.css";
import { ReactComponent as Slice } from "../../assets/slice.svg";
import { ReactComponent as Triangle } from "../../assets/lightArrowDown.svg";
import { ReactComponent as Rectangle } from "../../assets/lightRectangle.svg";

const Clasp = () => {
  return (
    <div className={styles.clasp}>
      <Rectangle />
      <Triangle className={styles.claspTriangle} />
    </div>
  );
};

const Roulette = () => {
  return (
    <div className={styles.container}>
      <div className={styles.startButtonWrapper}>
        <div className={styles.startButton}>
          <div>Start</div>
        </div>
      </div>
      <Clasp />
      <div className={styles.containerRotate}>
        {/* <Slice className={styles.sliceOne} />
      <Slice className={styles.sliceTwo} />
      <Slice className={styles.sliceThree} /> */}
      </div>
    </div>
  );
};

export default Roulette;
