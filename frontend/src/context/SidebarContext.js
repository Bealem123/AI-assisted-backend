import React, { createContext, useContext, useState } from "react";

// Create the Sidebar Context
const SidebarContext = createContext();

// SidebarProvider to provide the state and toggle function
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to access the Sidebar context
export const useSidebar = () => useContext(SidebarContext);
