import React from "react";
import Body5 from "../components/Layout/Body5"; // Import the Body5 component
import { useSidebar } from "../context/SidebarContext"; // Sidebar Context
import styles from "./Body5page.module.css"; // Import the CSS file for page layout

const Body5Page = () => {
  const { isSidebarOpen } = useSidebar(); // Access sidebar state

  return (
    <div
      className={`${styles.body5PageContainer} ${
        isSidebarOpen ? styles.sidebarOpen : ""
      }`}
    >
      <Body5 /> {/* Render Body5 component */}
    </div>
  );
};

export default Body5Page;
