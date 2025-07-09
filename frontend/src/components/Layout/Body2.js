import React from "react";
import styles from "./Body2.module.css"; // Importing Body1 styles

const Body2 = () => {
  return (
    <div className={styles.body2Container}>
      <div className={styles.body2Content}>
        <div className={styles.categories}>
          <div className={styles.category}>
            <h1 className={styles.categoryTitle}>CLICK. TRACK. DONE.</h1>
            <p className={styles.categoryDescription}>
              The Attendance Tracker Web Application is a vital tool for modern
              institutions and organizations aiming to maintain efficient and
              transparent attendance systems. By integrating advanced features
              and a scalable design, it transforms attendance management into a
              hassle-free, accurate, and effective process.The Attendance
              Tracker web application addresses the challenges associated with
              traditional methods of attendance. 
            </p>
            {/* <button className={styles.categoryBtn}>Explore</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
