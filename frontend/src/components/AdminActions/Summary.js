import React, { useEffect, useState } from "react";
import { fetchSummary } from "../../services/adminService";
import styles from "./Summary.module.css";

const Summary = () => {
  const [weeklyStats, setWeeklyStats] = useState([]);
  const [monthlyStats, setMonthlyStats] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getSummary = async () => {
      try {
        const data = await fetchSummary();
        setWeeklyStats(data.weeklyStats || []);
        setMonthlyStats(data.monthlyStats || []);
        setError("");
      } catch (err) {
        console.error("Error fetching summary:", err);
        setError("Failed to load summary.");
      }
    };

    getSummary();
  }, []);

  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.summary}>
      <h2 className={styles.title}>Attendance Summary</h2>

      {weeklyStats.length > 0 || monthlyStats.length > 0 ? (
        <div className={styles.statistics}>
          <h3 className={styles.subTitle}>Weekly Statistics</h3>
          {weeklyStats.length > 0 ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Week</th>
                  <th>Total Present</th>
                  <th>Total Absent</th>
                </tr>
              </thead>
              <tbody>
                {weeklyStats.map((week, index) => (
                  <tr key={index}>
                    <td>{week.year}</td>
                    <td>{week.week}</td>
                    <td>{week.total_present}</td>
                    <td>{week.total_absent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className={styles.noData}>No weekly stats available.</p>
          )}

          <h3 className={styles.subTitle}>Monthly Statistics</h3>
          {monthlyStats.length > 0 ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Month</th>
                  <th>Total Present</th>
                  <th>Total Absent</th>
                </tr>
              </thead>
              <tbody>
                {monthlyStats.map((month, index) => (
                  <tr key={index}>
                    <td>{month.year}</td>
                    <td>
                      {new Date(0, month.month - 1).toLocaleString("default", {
                        month: "long",
                      })}
                    </td>
                    <td>{month.total_present}</td>
                    <td>{month.total_absent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className={styles.noData}>No monthly stats available.</p>
          )}
        </div>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

export default Summary;
