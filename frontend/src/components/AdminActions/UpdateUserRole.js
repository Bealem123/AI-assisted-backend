import React, { useState } from "react";
import { updateUserRole } from "../../services/adminService";
import styles from "./UpdateUserRole.module.css";

const UpdateUserRole = () => {
  const [userId, setUserId] = useState("");
  const [newRole, setNewRole] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setMessage("");
      setError("");
      const response = await updateUserRole(userId, newRole);
      setMessage(response.message); // Backend success message
      setUserId(""); // Clear input
      setNewRole(""); // Clear input
    } catch (err) {
      setError(
        err.response?.data?.error ||
          err.message ||
          "Failed to update user role. Please try again later."
      );
    }
  };

  return (
    <div className={styles["update-user-role"]}>
      <h2>Update User Role</h2>
      <div>
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
      <div>
        <label htmlFor="new-role">New Role:</label>
        <select
          id="new-role"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          className={styles["select-field"]}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        disabled={!userId || !newRole}
        className={styles["submit-button"]}
      >
        <h2>Update Role</h2>
      </button>
      {message && <p className={styles["success-message"]}>{message}</p>}
      {error && <p className={styles["error-message"]}>{error}</p>}
    </div>
  );
};

export default UpdateUserRole;
