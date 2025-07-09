import React from "react";
import styles from "./Body6.module.css"; // Importing Body1 styles

const Body6 = () => {
  return (
    <div className={styles.body1Container}>
      <div className={styles.body1Content}>
        <div className={styles.categories}>
          <div className={styles.category}>
            <h1 className={styles.categoryTitle}>CLICK. TRACK. DONE.</h1>
            <p className={styles.categoryDescription}>
              With our advanced attendance tracker, you can forget about the old
              paper sign-ins and complicated spreadsheets. Our intuitive
              platform uses the latest technology to track attendance in
              real-time, ensuring that every entry is accurate and up-to-date.
              Whether you’re managing a classroom, a corporate meeting, or a
              large event, our system adapts to your needs, making it the
              perfect solution for schools, businesses, and organizations alike.
              Say goodbye to missed records and hello to effortless attendance
              management.
            </p>
            {/* <button className={styles.categoryBtn}>Explore</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body6;
