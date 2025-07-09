import React from "react";
import CheckUser from "../components/Auth/CheckUser";
import styles from "./CheckUserPage.module.css"; // Corrected the import to use the CSS module

function CheckUserPage() {
  return (
    <div className={styles.checkUserPage}>
      {" "}
      {/* Apply the CSS module styles here */}
      <h1>Check User Page</h1>
      <CheckUser />
    </div>
  );
}

export default CheckUserPage;
