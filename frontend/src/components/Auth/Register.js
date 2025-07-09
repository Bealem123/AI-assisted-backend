import React, { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [name, setName] = useState("");
  const [fingerprintData, setFingerprintData] = useState(""); // No default placeholder value
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !fingerprintData.trim()) {
      setError("Both name and fingerprint data are required.");
      setSuccess("");
      return;
    }

    const userData = {
      name: name.trim(),
      fingerprintData: fingerprintData.trim(),
    };

    try {
      console.log("Register payload:", JSON.stringify(userData));
      const response = await registerUser(userData);

      if (response.message === "User registered successfully") {
        setSuccess(response.message);
        setError("");
        setName("");
        setFingerprintData(""); // Reset fingerprint data field after successful registration

        // Debugging log
        console.log("Registration successful, navigating to home...");

        // Navigate to home page after successful registration
        setTimeout(() => {
          navigate("/home"); // Replace "/home" with your actual home route
        }, 100); // Slight delay to allow state updates
      } else {
        setError(response.message || "Error registering user.");
      }
    } catch (err) {
      console.error(
        "Error in registerUser:",
        err.response?.data || err.message
      );
      setError(err.response?.message || "Error registering user.");
      setSuccess("");
    }
  };

  return (
    <div className={styles.register}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Enter fingerprint data"
          value={fingerprintData}
          onChange={(e) => setFingerprintData(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
    </div>
  );
};

export default Register;
