import React from "react";
import styles from "./Body4.module.css";
import image4 from "../images/table3.png";

const Body1 = () => (
  <div className={styles.body1Container}>
    <div className={styles.body1Content}>
      <div className={styles.category}>
        <h1 className={styles.categoryTitle}>CLICK. TRACK. DONE.</h1>
        <img
          src={image4}
          alt="Table Display"
          className={styles.categoryImage}
        />
      </div>
    </div>
  </div>
);

export default Body1;
