import React from "react";
import styles from "./Wheel.module.css";

const Wheel = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.circle}>
        <li>
          <div
            className={styles.text}
            contentEditable="true"
            spellCheck="false"
          >
            ₹50
          </div>
        </li>
        <li>
          <div
            className={styles.text}
            contentEditable="true"
            spellCheck="false"
          >
            ₹20
          </div>
        </li>
        <li>
          <div
            className={styles.text}
            contentEditable="true"
            spellCheck="false"
          >
            1.5x
          </div>
        </li>
        <li>
          <div
            className={styles.text}
            contentEditable="true"
            spellCheck="false"
          >
            2x
          </div>
        </li>
        <li>
          <div
            className={styles.text}
            contentEditable="true"
            spellCheck="false"
          >
            ₹100
          </div>
        </li>
        <li>
          <div
            className={styles.text}
            contentEditable="true"
            spellCheck="false"
          >
            1.5x
          </div>
        </li>
        <li>
          <div
            className={styles.text}
            contentEditable="true"
            spellCheck="false"
          >
            2x
          </div>
        </li>
        <li>
          <div
            className={styles.text}
            contentEditable="true"
            spellCheck="false"
          >
            F
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Wheel;
