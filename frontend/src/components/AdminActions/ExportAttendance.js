import React, { useState } from "react";
import { exportAttendanceData } from "../../services/adminService";
import styles from "./ExportAttendance.module.css";

const ExportAttendance = () => {
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const [success, setSuccess] = useState(false); // Success state

  const handleExport = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await exportAttendanceData();

      // Check if the response is a Blob
      if (response.data) {
        const blob = new Blob([response.data], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "attendance_data.csv");
        document.body.appendChild(link);
        link.click();
        link.remove();
      }

      // Show success message
      setSuccess(true);
    } catch (err) {
      console.error("Error exporting attendance data:", err);
      setError("Failed to export attendance data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles["export-attendance"]}>
      <h2>Export Attendance Data</h2>
      <button
        onClick={handleExport}
        disabled={loading}
        className={styles["export-button"]}
      >
        {loading ? "Exporting..." : "Export as CSV"}
      </button>

      {/* Show loading message */}
      {loading && (
        <p className={styles["loading-message"]}>Processing your request...</p>
      )}

      {/* Show error message */}
      {error && <p className={styles["error-message"]}>{error}</p>}

      {/* Show success message */}
      {success && !error && (
        <p className={styles["success-message"]}>
          Export completed successfully!
        </p>
      )}
    </div>
  );
};

export default ExportAttendance;
