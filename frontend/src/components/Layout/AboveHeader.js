import React from "react";
import styles from "./AboveHeader.module.css"; // Import the CSS module
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"; // Import icons from react-icons

const AboveHeader = () => {
  return (
    <div className={styles.aboveHeader}>
      <div className={styles.announcement}>
        
      </div>
      <div className={styles.contactInfo}>
        <p>
          <FaEnvelope className={styles.icon} /> info@website.com |{" "}
          <FaPhone className={styles.icon} /> +123 456 7890
        </p>
        <div className={styles.socialIcons}>
          <FaFacebook className={styles.icon} />
          <FaTwitter className={styles.icon} />
          <FaInstagram className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default AboveHeader;
