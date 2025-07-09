import React from "react";
import Body3 from "../components/Layout/Body3"; // Import Body3 component
import { useSidebar } from "../context/SidebarContext"; // Sidebar Context
import styles from "./Body3Page.module.css"; // Import the CSS file for page layout

const Body3Page = () => {
  const { isSidebarOpen } = useSidebar(); // Access sidebar state

  return (
    <div
      className={`${styles.body3PageContainer} ${
        isSidebarOpen ? styles.sidebarOpen : ""
      }`}
    >
      <Body3 /> {/* Render Body3 component */}
    </div>
  );
};

export default Body3Page;
