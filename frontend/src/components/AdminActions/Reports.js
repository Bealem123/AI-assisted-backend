import React, { useEffect, useState, useContext } from "react";
import { fetchReports } from "../../services/adminService";
import UserContext from "../../context/UserContext";
import styles from "./Reports.module.css";

const Reports = () => {
  const { userId } = useContext(UserContext); // Get userId from context
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Initialize current month
  const [reports, setReports] = useState([]); // Store reports data
  const [error, setError] = useState(""); // Store error message
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Helper function to format date
  const formatDate = (isoDate) => {
    if (!isoDate) return "N/A"; // Handle missing date

    try {
      const date = new Date(isoDate); // Convert ISO string to Date object
      if (isNaN(date.getTime())) {
        console.error("Invalid Date:", isoDate); // Debug invalid date
        return "N/A";
      }

      // Format date in Ethiopian timezone
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Africa/Addis_Ababa",
      });
    } catch (error) {
      console.error("Error formatting date:", error); // Debug error
      return "N/A";
    }
  };

  // Load reports data on mount and when month/userId changes
  useEffect(() => {
    const loadReports = async () => {
      if (!userId) {
        setError("User ID is missing. Please log in.");
        return;
      }

      setIsLoading(true);
      try {
        const data = await fetchReports(userId, month); // Fetch reports from API
        console.log("Fetched Reports Data:", data); // Debug fetched data
        setReports(data);
        setError(""); // Clear any previous error
      } catch (err) {
        console.error("Error fetching reports:", err); // Debug fetch error
        setError("Failed to load reports.");
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    loadReports();
  }, [userId, month]);

  // Handle month selection change
  const handleMonthChange = (event) => {
    setMonth(Number(event.target.value));
  };

  // Handle no userId case
  if (!userId) return <div>Please log in to view reports.</div>;

  // Render error
  if (error) return <div className={styles.error}>{error}</div>;

  // Render loading state
  if (isLoading)
    return <div className={styles.loading}>Loading reports...</div>;

  // Render reports table
  return (
    <div className={styles.reports}>
      <h2>Reports</h2>
      <label htmlFor="month-select">Select Month: </label>
      <select
        id="month-select"
        value={month}
        onChange={handleMonthChange}
        className={styles.select}
      >
        {[...Array(12)].map((_, i) => (
          <option key={i} value={i + 1}>
            {new Date(0, i).toLocaleString("default", { month: "long" })}
          </option>
        ))}
      </select>

      {reports.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => {
              console.log("Processing Report:", report); // Debug individual report
              return (
                <tr key={index}>
                  <td>{report.id}</td>
                  <td>{formatDate(report.timestamp)}</td>
                  <td>{report.details || "No details available"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No reports found for the selected month.</p>
      )}
    </div>
  );
};

export default Reports;
