import React from "react";
import styles from "./Banner.module.css"; // Import CSS Module
import BannerImage from "../images/banner7.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* Category 1: Image */}
      <div className={styles.category}>
        {/* <h1 className={styles.bannerTitle}>Welcome to Attendance Tracker</h1> */}
         <img
          src={BannerImage} // Use the imported image
          alt="Banner"
          className={styles.bannerImage}
        /> 
        <div className={styles.bannerOverlay}>
          {/* <p className={styles.bannerText}>
            Track and manage attendance with ease.
          </p> */}
        </div>
      </div>

      {/* Category 2: Text */}
      <div className={styles.category}>
        <div className={styles.textCategory}>
        
{/*            
          <p className={styles.textContent}>
            Attendance Tracker helps streamline attendance management, making it
            easy for organizations and teams to stay on top of who’s in and
            who’s out.
          </p> */}
          {/* <p className={styles.textContent}>
            With real-time reporting and comprehensive analytics, you can make
            informed decisions and improve efficiency.
            <button className={styles.bannerBtn}>Get Started</button> 
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
