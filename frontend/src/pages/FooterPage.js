import React from "react";
import Footer from "../components/Layout/Footer"; // Footer component
import { useSidebar } from "../context/SidebarContext"; // Sidebar state
import styles from "./FooterPage.module.css"; // Styling

const FooterPage = () => {
  const { isSidebarOpen } = useSidebar(); // Access sidebar state

  return (
    <div
      className={`${styles.footerPageContainer} ${
        isSidebarOpen ? styles.sidebarOpen : ""
      }`}
    >
      <Footer />
    </div>
  );
};

export default FooterPage;
