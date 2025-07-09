import React from "react";
import styles from "./body1.module.css"; // Import the CSS module
import Body1Image from "../images/body12.png"; // Import the image

const Body1 = () => {
  return (
    <div className={styles.body1Container}>
      {/* Text Content Section */}
      <div className={styles.body1Section}>
        <h3 className={styles.body1Title}>Attendance Tracker</h3>
        <p className={styles.body1Text}>
          Our attendance tracker is a versatile solution designed to meet the
          needs of schools, businesses, and organizations of all sizes. It
          simplifies and automates attendance management, eliminating the
          inefficiencies and errors associated with traditional manual systems.
          With our platform, you can monitor attendance in real-time, generate
          detailed reports, and ensure compliance with organizational policies.
        </p>
      </div>

      {/* Image Section */}
      <div className={styles.body1Image}>
        <img
          src={Body1Image} // Use the imported image
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Body1;
