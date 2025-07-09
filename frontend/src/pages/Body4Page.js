import React from "react";
import Body4 from "../components/Layout/Body4"; // Import the Body4 component
import { useSidebar } from "../context/SidebarContext"; // Sidebar Context

const Body4Page = () => {
  const { sidebarState } = useSidebar(); // Assuming you're using the Sidebar context here

  return (
    <div>
      <Body4 /> {/* Render Body4 component */}
    </div>
  );
};

export default Body4Page;
