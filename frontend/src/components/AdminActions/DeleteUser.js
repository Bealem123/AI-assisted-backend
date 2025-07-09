import React, { useState } from "react";
import { deleteUserById } from "../../services/adminService";
import styles from "./DeleteUser.module.css";

const DeleteUser = () => {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      setMessage("");
      setError("");
      const response = await deleteUserById(userId);
      setMessage(response.message); // Assuming the backend sends a success message
      setUserId(""); // Clear input after success
    } catch (err) {
      setError(
        err.response?.data?.error ||
          err.message ||
          "Failed to delete user. Please try again later."
      );
    }
  };

  return (
    <div className={styles["delete-user"]}>
      <h2>Delete User</h2>
      <div className={styles["input-group"]}>
        <label htmlFor="user-id">User ID:</label>
        <input
          type="text"
          id="user-id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
          className={styles["input-field"]}
        />
      </div>
      <button
        onClick={handleDelete}
        disabled={!userId}
        className={`${styles["delete-button"]} ${
          !userId ? styles["disabled"] : ""
        }`}
      >
        <h2> Delete User</h2>
      </button>
      {message && <p className={styles["success"]}>{message}</p>}
      {error && <p className={styles["error"]}>{error}</p>}
    </div>
  );
};

export default DeleteUser;
