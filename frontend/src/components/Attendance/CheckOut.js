import React, { useState } from "react";
import { checkOut } from "../../services/attendanceService";
import styles from "./CheckOut.module.css"; // Import the styles as a module

const CheckOut = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await checkOut();
      setMessage(response.data.message);
    } catch (err) {
      setError(
        err.response?.data?.error || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Check-Out</h1>
      <button
        className={`${styles.button} ${loading ? styles.disabled : ""}`}
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? "Processing..." : "Check Out"}
      </button>
      {message && <p className={styles.success}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default CheckOut;
