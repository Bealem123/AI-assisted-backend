import React, { useEffect, useState } from "react";
import { fetchCurrentStatus } from "../../services/adminService";
import styles from "./CurrentStatus.module.css";

const CurrentStatus = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCurrentStatus = async () => {
      try {
        const data = await fetchCurrentStatus();
        console.log("Raw fetched data:", data); // Debugging log
        setStatus(data);
      } catch (err) {
        console.error("Error in getCurrentStatus:", err);
        setError("Failed to load current attendance status.");
      }
    };

    getCurrentStatus();
  }, []);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.currentStatus}>
      <h2>Current Attendance Status</h2>
      {status ? (
        <div>
          <p>User: {status.userName || "Unknown User"}</p>
          <p>
            Status: {status.currentStatus === 1 ? "Checked-In" : "Checked-Out"}
          </p>
          <p>
            Last Update:{" "}
            {status.lastUpdate
              ? new Date(status.lastUpdate).toLocaleString()
              : "N/A"}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CurrentStatus;
