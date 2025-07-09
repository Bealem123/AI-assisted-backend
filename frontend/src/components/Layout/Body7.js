import React from "react";
import styles from "./Body7.module.css"; // Import the CSS module
import Body7Image from "../images/logo.png"; // Import the image

const Body7 = () => {
  return (
    <div className={styles.body7Container}>
      {/* Text Content Section */}
      <div className={styles.body7Section}>
        {/* <h3 className={styles.body7Title}>Section 1</h3> */}
        <p className={styles.body7Text}>
          Say goodbye to tedious manual registers and embrace the future of
          attendance management with our state-of-the-art web application.
          Whether you're running a school, managing an office, or hosting an
          event, our Attendance Tracker ensures efficiency, transparency, and
          success.
        </p>
      </div>

      {/* Image Section */}
      <div className={styles.body7ImageContainer}>
        <img
          src={Body7Image} // Use the imported image
          alt="Banner"
          className={styles.body7Image}
        />
      </div>
    </div>
  );
};

export default Body7;
