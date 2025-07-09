import React from "react";
import AttendanceTrends from "../components/Attendance/AttendanceTrends";
import styles from "./AttendanceTrendsPage.module.css";

function AttendanceTrendsPage() {
  return (
    <div className={styles.attendanceTrendsPage}>
      <h1 className={styles.attackedHeading}>Attendance Trends</h1>{" "}
      {/* Styled heading */}
      <AttendanceTrends />
    </div>
  );
}

export default AttendanceTrendsPage;
