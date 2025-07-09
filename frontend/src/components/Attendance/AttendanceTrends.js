import React, { useEffect, useState } from "react";
import { fetchUserAttendanceTrends } from "../../services/attendanceService"; // Import the service to fetch trends
import styles from "./AttendanceTrends.module.css"; // Import the styles as a module

const AttendanceTrends = () => {
  const [attendanceData, setAttendanceData] = useState(null); // State to store fetched attendance data
  const [error, setError] = useState(""); // State to store error message

  // UseEffect hook to fetch attendance trends when the component mounts
  useEffect(() => {
    const getAttendanceTrends = async () => {
      try {
        const data = await fetchUserAttendanceTrends(); // Fetch the attendance data
        console.log("Fetched attendance data:", data); // Debugging log
        setAttendanceData(data.userStats); // Set the fetched data to state
      } catch (err) {
        console.error("Error fetching attendance trends:", err);
        setError("Failed to load attendance trends."); // Set error message if the request fails
      }
    };

    getAttendanceTrends(); // Call the function to fetch data
  }, []);

  // Display error if there was an issue fetching the data
  if (error) {
    return <div className={styles.error}>{error}</div>; // Apply styles for error
  }

  // Display loading message while the data is being fetched
  if (!attendanceData) {
    return <div>Loading attendance trends...</div>;
  }

  return (
    <div className={styles.attendanceTrends}> {/* Apply styles to the container */}
      <h2>Your Attendance Trends</h2>
      {attendanceData.length > 0 ? (
        <div>
          <table className={styles.table}> {/* Apply styles to the table */}
            <thead>
              <tr>
                <th>Year</th>
                <th>Week</th>
                <th>Total Present</th>
                <th>Total Absent</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((data) => (
                <tr key={`${data.year}-${data.week}`}>
                  <td>{data.year}</td>
                  <td>{data.week}</td>
                  <td>{data.total_present}</td>
                  <td>{data.total_absent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No attendance data found.</p>
      )}
    </div>
  );
};

export default AttendanceTrends;
