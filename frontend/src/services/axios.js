import axios from "axios";

// Dynamically set the base URL for the API
const baseURL =
  process.env.REACT_APP_API_URL || // Use the .env variable if provided
  (process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api" // Default local API URL for development
    : "https://second-backend-ck52.onrender.com/api"); // Default production API URL
    

// Create an Axios instance
const apiClient = axios.create({
  baseURL, // Dynamically assign the base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the JWT token in headers
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Fetch JWT token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Add token to Authorization header
    }
    return config; // Pass the config to proceed with the request
  },
  (error) => {
    // Handle request errors
    console.error("Request error:", error.message);
    return Promise.reject(error);
  }
);

// Export the Axios instance for use in your app
export default apiClient;

// import axios from "axios";

// // Create an Axios instance
// const apiClient = axios.create({
//   baseURL: "https://aws-1-u47o.onrender.com/api", // Replace with your backend URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add a request interceptor to include the JWT token in headers
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`; // Add the token to Authorization header
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default apiClient;
// import axios from "axios";

// // Create an Axios instance
// const apiClient = axios.create({
//   baseURL: "http://localhost:5000/api", // Replace with your backend URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Add a request interceptor to include the JWT token in headers
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`; // Add the token to Authorization header
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default apiClient;
