import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./AdminDashboard.module.css";

import CurrentStatus from "../components/AdminActions/CurrentStatus";
import HistoryLogs from "../components/AdminActions/HistoryLogs";
import Notifications from "../components/AdminActions/Notifications";
import Reports from "../components/AdminActions/Reports";
import Summary from "../components/AdminActions/Summary";
import DeleteUser from "../components/AdminActions/DeleteUser";
import UpdateUserRole from "../components/AdminActions/UpdateUserRole";
import ExportAttendance from "../components/AdminActions/ExportAttendance"; // Import ExportAttendance component

const AdminDashboardPage = () => {
  return (
    <div className="admin-dashboard">
      
      <nav>
        <Link to="current-status">Current Status</Link>
        <Link to="history-logs">History Logs</Link>
        <Link to="notifications">Notifications</Link>
        <Link to="reports">Reports</Link>
        <Link to="summary">Summary</Link>
        <Link to="delete-user">Delete User</Link>
        <Link to="update-user-role">Update User Role</Link>
        <Link to="export-attendance">Export Attendance</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<div>Select a section from the dashboard</div>}
        />
        <Route path="current-status" element={<CurrentStatus />} />
        <Route path="history-logs" element={<HistoryLogs />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="reports" element={<Reports />} />
        <Route path="summary" element={<Summary />} />
        <Route path="delete-user" element={<DeleteUser />} />
        <Route path="update-user-role" element={<UpdateUserRole />} />
        <Route path="export-attendance" element={<ExportAttendance />} />
      </Routes>

      <Outlet />
    </div>
  );
};

export default AdminDashboardPage;
