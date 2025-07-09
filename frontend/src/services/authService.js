import apiClient from "./axios"; // Use your configured Axios instance
import { jwtDecode } from "jwt-decode";

// Register a new user
export const registerUser = async ({ name, fingerprintData }) => {
  try {
    console.log("Register payload:", JSON.stringify({ name, fingerprintData }));
    const response = await apiClient.post("/auth/register", {
      name,
      fingerprintData, // Matches the backend's expected keys
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error in registerUser:",
      error.response?.data || error.message
    );
    throw error.response?.data || { message: "Registration failed" };
  }
};

// Login an existing user
export const loginUser = async ({ name, fingerprintData }) => {
  try {
    // Log the payload being sent to the backend for debugging
    console.log("Login payload:", JSON.stringify({ name, fingerprintData }));

    // Make API request to login
    const response = await apiClient.post("/auth/login", {
      name,
      fingerprintData,
    });

    // Check if the response contains a token and store it in localStorage
    if (response.data?.token) {
      localStorage.setItem("token", response.data.token); // Save JWT token
    }

    // Return the response data (might contain user info, status, etc.)
    return response.data;
  } catch (error) {
    // Improved error handling
    console.error("Error in loginUser:", error.response?.data || error.message);

    // Throw error response or provide a default error message
    throw error.response?.data || { message: "Login failed" };
  }
};

// Check if the user is authenticated
export const checkUser = async () => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the JWT from localStorage

    if (!token) {
      throw new Error("Authentication token is missing. Please log in.");
    }

    // Decode the token to inspect its payload
    try {
      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken); // Log the decoded token
    } catch (decodeError) {
      console.error("Error decoding token:", decodeError);
      throw new Error("Invalid token. Please log in again.");
    }

    console.log("Sending token in Authorization header:", token); // Log the token

    const response = await apiClient.get("/auth/check-user", {
      headers: {
        Authorization: `Bearer ${token}`, // Use the token from localStorage
      },
    });

    console.log("Response from backend:", response.data); // Log the response

    return response.data;
  } catch (err) {
    console.error("Error in checkUser service:", err);

    // Enhanced error handling
    if (err.response?.status === 401) {
      throw new Error("Session expired. Please log in again.");
    }

    throw new Error(
      err.response?.data?.error || "Failed to fetch user information."
    );
  }
}; // import apiClient from "./axios"; // Use your configured Axios instance
// import { jwtDecode } from "jwt-decode";

// // Register a new user
// export const registerUser = async ({ name, fingerprintData }) => {
//   try {
//     console.log("Register payload:", JSON.stringify({ name, fingerprintData }));
//     const response = await apiClient.post("/auth/register", {
//       name,
//       fingerprintData, // Matches the backend's expected keys
//     });
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error in registerUser:",
//       error.response?.data || error.message
//     );
//     throw error.response?.data || { message: "Registration failed" };
//   }
// };

// // Login an existing user
// export const loginUser = async ({ name, fingerprintData }) => {
//   try {
//     // Log the payload being sent to the backend for debugging
//     console.log("Login payload:", JSON.stringify({ name, fingerprintData }));

//     // Make API request to login
//     const response = await apiClient.post("/auth/login", {
//       name,
//       fingerprintData,
//     });

//     // Check if the response contains a token and store it in localStorage
//     if (response.data?.token) {
//       localStorage.setItem("token", response.data.token); // Save JWT token
//     }

//     // Return the response data (might contain user info, status, etc.)
//     return response.data;
//   } catch (error) {
//     // Improved error handling
//     console.error("Error in loginUser:", error.response?.data || error.message);

//     // Throw error response or provide a default error message
//     throw error.response?.data || { message: "Login failed" };
//   }
// };

// // Check if the user is authenticated
// export const checkUser = async () => {
//   try {
//     const token = localStorage.getItem("token"); // Retrieve the JWT from localStorage

//     if (!token) {
//       throw new Error("Authentication token is missing. Please log in.");
//     }

//     // Decode the token to inspect its payload
//     try {
//       const decodedToken = jwtDecode(token);
//       console.log("Decoded Token:", decodedToken); // Log the decoded token
//     } catch (decodeError) {
//       console.error("Error decoding token:", decodeError);
//       throw new Error("Invalid token. Please log in again.");
//     }

//     console.log("Sending token in Authorization header:", token); // Log the token

//     const response = await apiClient.get("/auth/check-user", {
//       headers: {
//         Authorization: `Bearer ${token}`, // Use the token from localStorage
//       },
//     });

//     console.log("Response from backend:", response.data); // Log the response

//     return response.data;
//   } catch (err) {
//     console.error("Error in checkUser service:", err);

//     // Enhanced error handling
//     if (err.response?.status === 401) {
//       throw new Error("Session expired. Please log in again.");
//     }

//     throw new Error(
//       err.response?.data?.error || "Failed to fetch user information."
//     );
//   }
// };
// import apiClient from "./axios"; // Use your configured Axios instance
// import { jwtDecode } from "jwt-decode";

// export const registerUser = async ({ name, fingerprintData }) => {
//   try {
//     console.log("Register payload:", JSON.stringify({ name, fingerprintData }));
//     const response = await apiClient.post("/auth/register", {
//       name,
//       fingerprintData, // Matches the backend's expected keys
//     });
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error in registerUser:",
//       error.response?.data || error.message
//     );
//     throw error.response?.data || { message: "Registration failed" };
//   }
// };

// export const loginUser = async ({ name, fingerprintData }) => {
//   try {
//     // Log the payload being sent to the backend for debugging
//     console.log("Login payload:", JSON.stringify({ name, fingerprintData }));

//     // Make API request to login
//     const response = await apiClient.post("/auth/login", {
//       name,
//       fingerprintData,
//     });

//     // Check if the response contains a token and store it in localStorage
//     if (response.data?.token) {
//       localStorage.setItem("token", response.data.token); // Save JWT token
//     }

//     // Return the response data (might contain user info, status, etc.)
//     return response.data;
//   } catch (error) {
//     // Improved error handling
//     console.error("Error in loginUser:", error.response?.data || error.message);

//     // Throw error response or provide a default error message
//     throw error.response?.data || { message: "Login failed" };
//   }
// };

// export const checkUser = async () => {
//   try {
//     const token = localStorage.getItem("jwt"); // Retrieve the JWT

//     if (!token) {
//       throw new Error("Authentication token is missing. Please log in.");
//     }

//     // Decode the token to inspect its payload
//     try {
//       const decodedToken = jwtDecode(token);
//       console.log("Decoded Token:", decodedToken); // Log the decoded token
//     } catch (decodeError) {
//       console.error("Error decoding token:", decodeError);
//       throw new Error("Invalid token. Please log in again.");
//     }

//     console.log("Sending token in Authorization header:", token); // Log the token

//     const response = await apiClient.get("/auth/check-user", {
//       headers: {
//         Authorization: `Bearer ${token}`, // Use the token from localStorage
//       },
//     });

//     console.log("Response from backend:", response.data); // Log the response

//     return response.data;
//   } catch (err) {
//     console.error("Error in checkUser service:", err);

//     // Enhanced error handling
//     if (err.response?.status === 401) {
//       throw new Error("Session expired. Please log in again.");
//     }

//     throw new Error(
//       err.response?.data?.error || "Failed to fetch user information."
//     );
//   }
// };
