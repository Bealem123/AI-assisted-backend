import React, { useState, Suspense, lazy } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Sidebar.module.css";

// Sidebar Component
const SidebarMenu = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={styles.toggleButton}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`${styles.sidebarLayout} ${
          isSidebarOpen ? styles.open : ""
        }`}
      >
        <ul className={styles.sidebarMenu}>
          <li>
            <NavLink
              to="/current-status"
              className={styles.menuLink}
              onClick={toggleSidebar}
            >
              <p>Current Status</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={styles.menuLink}
              onClick={toggleSidebar}
            >
              <p>Reports</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              className={styles.menuLink}
              onClick={toggleSidebar}
            >
              <p>Notifications</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history-logs"
              className={styles.menuLink}
              onClick={toggleSidebar}
            >
              <p>History Logs</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/summary"
              className={styles.menuLink}
              onClick={toggleSidebar}
            >
              <p>Summary</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/delete-user"
              className={styles.menuLink}
              onClick={toggleSidebar}
            >
              <p>Delete User</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/update-user-role"
              className={styles.menuLink}
              onClick={toggleSidebar}
            >
              <p>Update User Role</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/export-attendance"
              className={styles.menuLink}
              onClick={toggleSidebar}
            >
              <p>Export Attendance</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Lazy-load components
const CurrentStatus = lazy(() => import("../AdminActions/CurrentStatus"));
const Reports = lazy(() => import("../AdminActions/Reports"));
const Notifications = lazy(() => import("../AdminActions/Notifications"));
const HistoryLogs = lazy(() => import("../AdminActions/HistoryLogs"));
const Summary = lazy(() => import("../AdminActions/Summary"));
const DeleteUser = lazy(() => import("../AdminActions/DeleteUser"));
const UpdateUserRole = lazy(() => import("../AdminActions/UpdateUserRole"));
const ExportAttendance = lazy(() => import("../AdminActions/ExportAttendance"));

// Main Sidebar Component
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div
      className={`${styles.pageLayout} ${
        isSidebarOpen ? styles.withSidebar : ""
      }`}
    >
      {/* Sidebar Menu */}
      <SidebarMenu
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <div className={styles.contentArea}>
        <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
          <Routes>
            <Route path="/current-status" element={<CurrentStatus />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/history-logs" element={<HistoryLogs />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/delete-user" element={<DeleteUser />} />
            <Route path="/update-user-role" element={<UpdateUserRole />} />
            <Route path="/export-attendance" element={<ExportAttendance />} />
            {/* Default route */}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Sidebar;
