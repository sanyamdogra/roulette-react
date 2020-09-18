import React from "react";
import ArrowBar from "../../components/ArrowBar/ArrowBar";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import InfoBox from "../../components/InfoBox/InfoBox";
import Roulette from "../../components/Roulette/Roulette";
// import Wheel from '../../components/Wheel/Wheel'
import styles from "./Rewards.module.css";

const Rewards = () => {
  return (
    <div className={styles.container}>
      <HeaderNav />
      <Roulette />
      <ArrowBar />
      <div className={styles.infoWrapper}>
        <InfoBox />
      </div>
      <div className={styles.supportLabel}>
        Have a question? <span className={styles.helpAction}>Get help</span>
      </div>
      {/* <Wheel/> */}
    </div>
  );
};

export default Rewards;
