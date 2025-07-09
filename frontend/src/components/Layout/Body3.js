import React from "react";
import styles from "./Body3.module.css"; // Import the CSS module
import Body3Image from "../images/banner1.png"; // Import the image

const Body3 = () => {
  return (
    <div className={styles.body3Container}>
      {/* Text Content Section */}
      <div className={styles.body3Section}>
        <h3 className={styles.body3Title}>Multi-Device Accessibility</h3>
        <p className={styles.body3Text}>
          For schools, our system helps teachers and administrators save time by
          automating roll calls, tracking absences, and identifying patterns
          like late arrivals or frequent absences. It’s a valuable tool for
          fostering accountability among students and improving communication
          with parents.Also for For organizations such as training centers,
          non-profits, or events, our platform helps you manage attendee records
          efficiently, offering features like event check-ins and participant
          tracking.
        </p>
      </div>

      {/* Image Section */}
      <div className={styles.body3Image}>
        <img
          src={Body3Image} // Use the imported image
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Body3;
