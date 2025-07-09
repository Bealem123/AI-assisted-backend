import React from "react";
import Body6 from "../components/Layout/Body6"; // Import the Body1 component
import { useSidebar } from "../context/SidebarContext"; // Sidebar Context
import styles from "./Body6Page.module.css"; // Import the CSS module for Body1Page

const Body6Page = () => {
  const { isSidebarOpen } = useSidebar(); // Access sidebar state

  return (
    <div
      className={`${styles.body1PageContainer} ${
        isSidebarOpen ? styles.sidebarOpen : ""
      }`}
    >
      <Body6 /> {/* Render Body1 component */}
    </div>
  );
};

export default Body6Page;
