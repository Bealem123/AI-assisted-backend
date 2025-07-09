import React, { useState } from "react";
import { loginUser } from "../../services/authService";
import { jwtDecode } from "jwt-decode";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Login.module.css";

const Login = () => {
  const { setUserId, setUsername } = useUserContext(); // Access context functions
  const navigate = useNavigate(); // Initialize the navigate function
  const [name, setName] = useState("");
  const [fingerprintData, setFingerprintData] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    if (!name.trim() || !fingerprintData.trim()) {
      setError("Both name and fingerprint data are required.");
      setIsLoading(false);
      return;
    }

    const loginData = {
      name: name.trim(),
      fingerprintData: fingerprintData.trim(),
    };

    try {
      const response = await loginUser(loginData);

      if (response?.token) {
        const decoded = jwtDecode(response.token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp > currentTime) {
          localStorage.setItem("jwt", response.token);
          setUserId(response.user.id); // Set userId in context
          setUsername(response.user.name); // Set username in context
          setSuccess("Login successful!");

          // Navigate to home page after successful login
          navigate("/home"); // Replace "/home" with your actual home route
        } else {
          setError("Token has expired. Please try logging in again.");
        }
      } else {
        setError(response?.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error logging in.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.login}>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <button type="submit" disabled={isLoading} className={styles.button}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
    </div>
  );
};

export default Login;
// import React, { useState } from "react";
// import { loginUser } from "../../services/authService";
// import { jwtDecode } from "jwt-decode";
// import { useUserContext } from "../../context/UserContext";
// import styles from "./Login.module.css";

// const Login = () => {
//   const { setUserId, setUsername } = useUserContext(); // Access context functions
//   const [name, setName] = useState("");
//   const [fingerprintData, setFingerprintData] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setIsLoading(true);

//     if (!name.trim() || !fingerprintData.trim()) {
//       setError("Both name and fingerprint data are required.");
//       setIsLoading(false);
//       return;
//     }

//     const loginData = {
//       name: name.trim(),
//       fingerprintData: fingerprintData.trim(),
//     };

//     try {
//       const response = await loginUser(loginData);

//       if (response?.token) {
//         const decoded = jwtDecode(response.token);
//         const currentTime = Date.now() / 1000;

//         if (decoded.exp > currentTime) {
//           localStorage.setItem("jwt", response.token);
//           setUserId(response.user.id); // Set userId in context
//           setUsername(response.user.name); // Set username in context
//           setSuccess("Login successful!");
//         } else {
//           setError("Token has expired. Please try logging in again.");
//         }
//       } else {
//         setError(response?.message || "Login failed. Please try again.");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Error logging in.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className={styles.login}>
//       <h2>User Login</h2>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className={styles.input}
//         />
//         <input
//           type="text"
//           placeholder="Enter fingerprint data"
//           value={fingerprintData}
//           onChange={(e) => setFingerprintData(e.target.value)}
//           required
//           className={styles.input}
//         />
//         <button type="submit" disabled={isLoading} className={styles.button}>
//           {isLoading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//       {error && <p className={styles.error}>{error}</p>}
//       {success && <p className={styles.success}>{success}</p>}
//     </div>
//   );
// };

// export default Login;
