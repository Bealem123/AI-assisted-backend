import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLinks}>
        <div className={styles.linkSection}>
          <h4>Features</h4>
          <ul>
            <li>Fast and Easy Attendance Entry</li>
            <li>Student, Class, and Grade Dashboards</li>
            <li>Teacher Parent Messaging System</li>
            <li>Customizable Attendance Reporting</li>
            <li>Simple Data Export</li>
          </ul>
        </div>

        <div className={styles.linkSection}>
          <h4>Benefits</h4>
          <ul>
            <li>Track Attendance From Anywhere</li>
            <li>Perfect For Any Class Or Group</li>
            <li>Great Import And Export Tools</li>
            <li>Priced Right (It's FREE!)</li>
          </ul>
        </div>

        <div className={styles.linkSection}>
          <h4>Pages</h4>
          <ul>
            <li>
              <a href="#register" className={styles.footerLink}>
                Register
              </a>
            </li>
            <li>
              <a href="#login" className={styles.footerLink}>
                Login
              </a>
            </li>
            <li>
              <a href="#features" className={styles.footerLink}>
                Features
              </a>
            </li>
            <li>
              <a href="#about" className={styles.footerLink}>
                About MyAT
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.footerLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerNewsletter}>
        <h4>Subscribe to our newsletter</h4>
        <form className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Your email address"
            className={styles.newsletterInput}
          />
          <button type="submit" className={styles.newsletterButton}>
            Subscribe
          </button>
        </form>
      </div>

      <div className={styles.footerSocial}>
        <a
          href="https://facebook.com"
          className={styles.socialIcon}
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com"
          className={styles.socialIcon}
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          className={styles.socialIcon}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          className={styles.socialIcon}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://youtube.com"
          className={styles.socialIcon}
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>

      <div className={styles.footerCredits}>
        <article>
          <h2>About Attendance Tracker:</h2> <br />
          <p>
            Empowering institutions with real-time attendance tracking and
            seamless data management. Say goodbye to manual processes and
            embrace a smarter, faster way of managing attendance.
          </p>
          <h5>© 2025. All rights reserved.</h5>
        </article>
      </div>
    </div>
  );
};

export default Footer;
