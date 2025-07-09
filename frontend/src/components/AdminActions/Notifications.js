import React, { useEffect, useState } from "react";
import { fetchNotifications } from "../../services/adminService"; // API service function
import styles from "./Notifications.module.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const data = await fetchNotifications(); // Calls the service function
        setNotifications(data);
      } catch (err) {
        console.error("Error fetching notifications:", err);
        setError("Failed to load notifications.");
      }
    };

    loadNotifications();
  }, []);

  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.notifications}>
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul className={styles.notificationList}>
          {notifications.map((notification, index) => (
            <li key={index} className={styles.notificationItem}>
              {notification.message}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noNotifications}>No notifications available.</p>
      )}
    </div>
  );
};

export default Notifications;
