import React, { useEffect, useState } from "react";
import { checkUser } from "../../services/authService"; // Adjust the path to match your project structure
import styles from "./CheckUser.module.css"; // Import the styles as a module

const CheckUser = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await checkUser();
        console.log("Fetched user data:", data); // Debugging log
        setUser(data.user);
      } catch (err) {
        console.error("Error fetching user:", err);
        setError(err.error || "Failed to fetch user information.");
        if (err.error === "Session expired. Please log in again.") {
          setTimeout(() => {
            window.location.href = "/login";
          }, 3000);
        }
      }
    };

    fetchUser();
  }, []);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.checkUser}>
      <h2 className={styles.header}>Authenticated User</h2>
      {user && typeof user === "object" ? (
        <div>
          <p>
            <strong>ID:</strong> {user.id || "N/A"}
          </p>
          <p>
            <strong>Name:</strong> {user.name || "N/A"}
          </p>
          <p>
            <strong>Fingerprint Data:</strong>{" "}
            {typeof user.fingerprint_data === "string"
              ? user.fingerprint_data
              : "No data available"}
          </p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default CheckUser;
