import React, { useState } from "react";
import styles from "./Roulette.module.css";
import { ReactComponent as Triangle } from "../../assets/lightArrowDown.svg";
import { ReactComponent as Rectangle } from "../../assets/lightRectangle.svg";
import Wheel from "../Wheel/Wheel";

const labels = [
  {
    value: "₹50",
  },
  {
    value: "Better Luck",
  },
  {
    value: "2X",
  },
  {
    value: "₹100",
  },
  {
    value: "₹20",
  },
  {
    value: "₹50",
  },
  {
    value: "1.5X",
  },
  {
    value: "2X",
  },
];

const Roulette = () => {
  const [selected, setSelected] = useState(null);
  const spinning = selected !== null ? `${styles.spinning}` : "";
  const wheelVars = {
    "--nb-item": labels.length, // number of items
    "--selected-item": selected, // index of the selected item
  };
  const selectItem = async () => {
    if (selected == null) {
      const selectedItem = Math.floor(Math.random() * labels.length); //add items.length
      console.log(selectedItem);
      await setSelected(selectedItem);
    } else {
      await setSelected(null);
      setTimeout(() => {
        console.log("reset");
      }, 500);
    }
  };
  const Clasp = () => {
    return (
      <div className={styles.clasp}>
        <Rectangle />
        <Triangle className={styles.claspTriangle} />
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.startButtonWrapper}
        onClick={() => {
          selectItem();
        }}
      >
        <div className={styles.startButton}>
          <div>{selected ? "Reset" : "Spin"}</div>
        </div>
      </div>
      <Clasp />
      <div className={`${styles.rotate} ${spinning}`} style={wheelVars}>
        <Wheel items={labels} />
      </div>
    </div>
  );
};

export default Roulette;
