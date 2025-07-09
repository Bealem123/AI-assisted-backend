import React from "react";
import Body2 from "../components/Layout/Body2"; // Import the Body2 component
import { useSidebar } from "../context/SidebarContext"; // Sidebar Context
import styles from "./Body2Page.module.css"; // Import the CSS file for page layout

const Body2Page = () => {
  const { isSidebarOpen } = useSidebar(); // Access sidebar state

  return (
    <div
      className={`${styles.body2PageContainer} ${
        isSidebarOpen ? styles.sidebarOpen : ""
      }`}
    >
      <Body2 /> {/* Render Body2 component */}
    </div>
  );
};

export default Body2Page;
