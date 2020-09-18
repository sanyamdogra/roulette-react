import React, { useState } from "react";
import styles from "./Roulette.module.css";
// import { ReactComponent as Slice } from "../../assets/slice.svg";
import { ReactComponent as Triangle } from "../../assets/lightArrowDown.svg";
import { ReactComponent as Rectangle } from "../../assets/lightRectangle.svg";
import Wheel from "../Wheel/Wheel";

const Clasp = () => {
  return (
    <div className={styles.clasp}>
      <Rectangle />
      <Triangle className={styles.claspTriangle} />
    </div>
  );
};

const Roulette = () => {
  const [animation, setAnimation] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className={styles.startButtonWrapper}
        onClick={() => {
          setAnimation(!animation);
        }}
      >
        <div className={styles.startButton}>
          <div>Start</div>
        </div>
      </div>
      <Clasp />
      <div
        className={styles.rotate}
        style={{ animationPlayState: animation ? null : "paused" }}
      >
        <Wheel />
      </div>
    </div>
  );
};

export default Roulette;
