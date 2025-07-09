import React, { useEffect, useState } from "react";
import { fetchHistoryLogs } from "../../services/adminService";
import styles from "./HistoryLogs.module.css";

const HistoryLogs = () => {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getHistoryLogs = async () => {
      try {
        const data = await fetchHistoryLogs();
        setLogs(data.attendanceHistory || []); // Extract 'attendanceHistory' from the response
      } catch (err) {
        console.error("Error fetching history logs:", err);
        setError(
          err.response?.data?.error ||
            "Failed to load history logs. Please try again later."
        );
      } finally {
        setIsLoading(false);
      }
    };

    getHistoryLogs();
  }, []);

  if (isLoading) return <p>Loading history logs...</p>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles["history-logs"]}>
      <h2>History Logs</h2>
      {logs.length > 0 ? (
        <table>
          <caption>Attendance History Logs</caption>
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.userName || "Unknown User"}</td>{" "}
                {/* If no username, fallback to "Unknown User" */}
                <td>
                  {log.timestamp
                    ? new Date(log.timestamp).toLocaleDateString()
                    : "N/A"}
                </td>
                <td>
                  {log.timestamp
                    ? new Date(log.timestamp).toLocaleTimeString()
                    : "N/A"}
                </td>
                <td>{log.status === 1 ? "Checked-In" : "Checked-Out"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No logs available.</p>
      )}
    </div>
  );
};

export default HistoryLogs;
