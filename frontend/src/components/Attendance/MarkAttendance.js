import React, { useState } from "react";
import { markAttendance } from "../../services/attendanceService"; // API service
import styles from "./MarkAttendance.module.css"; // Import styles

const MarkAttendance = () => {
  const [userId, setUserId] = useState("");
  const [fingerprintData, setFingerprintData] = useState("");
  const [attendanceStatus, setAttendanceStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMarkAttendance = async (status) => {
    setLoading(true);
    setAttendanceStatus("");
    setError("");

    // Validate form fields
    if (!userId || !fingerprintData) {
      setError("Please enter both User ID and Fingerprint Data.");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        userId: Number(userId), // Convert to number if userId is numeric
        fingerprintData: fingerprintData.trim(), // Ensure no leading/trailing spaces
        attendanceStatus: status === "Check-In", // True for Check-In, False for Check-Out
      };

      const response = await markAttendance(payload);

      setAttendanceStatus(response.data.message); // Display success message
    } catch (err) {
      console.error("Error marking attendance:", err.response || err.message);
      setError(err.response?.data?.error || "An unknown error occurred.");
    }

    setLoading(false);
  };

  return (
    <div className={styles["mark-attendance"]}>
      <h1>Mark Your Attendance</h1>

      {/* Form to enter User ID and Fingerprint Data */}
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent page reload on form submission
        }}
        className={styles["attendance-form"]}
      >
        <div className={styles["form-group"]}>
          <label htmlFor="userId">User ID:</label>
          <input
            type="number"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your User ID"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="fingerprintData">Fingerprint Data:</label>
          <input
            type="text"
            id="fingerprintData"
            value={fingerprintData}
            onChange={(e) => setFingerprintData(e.target.value)}
            placeholder="Enter fingerprint data"
          />
        </div>

        {/* Attendance Buttons */}
        <div className={styles["buttons"]}>
          <button
            type="button"
            onClick={() => handleMarkAttendance("Check-In")}
            disabled={loading}
          >
            {loading ? "Loading..." : "Mark Check-In"}
          </button>
          <button
            type="button"
            onClick={() => handleMarkAttendance("Check-Out")}
            disabled={loading}
          >
            {loading ? "Loading..." : "Mark Check-Out"}
          </button>
        </div>
      </form>

      {/* Display Status or Error */}
      {attendanceStatus && (
        <p className={styles["success"]}>{attendanceStatus}</p>
      )}
      {error && <p className={styles["error"]}>{error}</p>}
    </div>
  );
};

export default MarkAttendance;
