import React from "react";
import Body1 from "../components/Layout/Body1"; // Import the Body1 component
import { useSidebar } from "../context/SidebarContext"; // Sidebar Context
import styles from "./Body1Page.module.css"; // Import the CSS module for Body1Page

const Body1Page = () => {
  const { isSidebarOpen } = useSidebar(); // Access sidebar state

  return (
    <div
      className={`${styles.body1PageContainer} ${
        isSidebarOpen ? styles.sidebarOpen : ""
      }`}
    >
      <Body1 /> {/* Render Body1 component */}
    </div>
  );
};

export default Body1Page;
