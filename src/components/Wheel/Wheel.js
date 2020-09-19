import React from "react";
import styles from "./Wheel.module.css";


const Wheel = (props) => {
  const displaySlices = () =>
    props.items.map((item, index) => (
      <li key={index}>
        <div className={styles.text} style={{ '--item-nb': index }}>
          {item.value}
        </div>
      </li>
    ));

  return (
    <div className={styles.container}>
      <ul className={styles.circle}>{displaySlices()}</ul>
    </div>
  );
};

export default Wheel;
