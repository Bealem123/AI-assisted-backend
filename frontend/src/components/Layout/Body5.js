import React from "react";
import styles from "./Body5.module.css"; // Import the CSS module
import BodyImage from "../images/body10.jpg.png";

const Body5 = () => {
  return (
    <div className={styles.body2Container}>
      {/* Box for the Image */}
      <div className={styles.imageBox}>
        <img
          src={BodyImage} // Use the imported image
          alt="Banner"
          className={styles.bodyImage}
        />
      </div>

      {/* Box for the Text */}
      <div className={styles.textBox}>
        <div className={styles.category}>
          <h3 className={styles.categoryTitle}>Real-time data</h3>
          <p className={styles.categoryText}>
            For businesses, the attendance tracker ensures employee time
            management is accurate, helping HR teams with payroll, overtime
            calculations, and productivity analysis. Whether your team is in the
            office, remote, or working in a hybrid environment, our solution
            adapts to your workflows seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body5;
