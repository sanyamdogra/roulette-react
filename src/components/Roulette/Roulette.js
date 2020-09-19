import React, { useState } from "react";
import styles from "./Roulette.module.css";
import { ReactComponent as Triangle } from "../../assets/lightArrowDown.svg";
import { ReactComponent as Rectangle } from "../../assets/lightRectangle.svg";
import Wheel from "../Wheel/Wheel";
import { appendSpreadsheet } from "../../services/addToSheets";

// Labels for the wheel
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
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const spinning = selected !== null ? `${styles.spinning}` : ""; // To toggle spinning class

  // Wheel variables
  const wheelVars = {
    "--nb-item": labels.length, // number of items
    "--selected-item": selected, // index of the selected item
  };

  // To select a particular slice from the wheel and post to Google Sheets
  const selectItem = async () => {
    if (selected == null) {
      const selectedItem = Math.floor(Math.random() * labels.length); //add items.length
      const newRow = {
        web_client: "mobile-pwa", //mobile client
        time_stamp: today.toISOString(), //To convert to ISO format
        spin_result_index: selectedItem + 1, // To return the selected slice
      };
      await setSelected(selectedItem);
      appendSpreadsheet(newRow); //add in the spreadsheet
    } else {
      await setSelected(null);
      setTimeout(() => {
        console.log("reset");
      }, 500);
    }
  };

  // CLASP COMPONENT
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
