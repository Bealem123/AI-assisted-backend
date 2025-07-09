import apiClient from "./axios";
export const markAttendance = async (data) => {
  try {
    const response = await apiClient.post("/attendance/mark", data); // Adjust endpoint if necessary
    return response;
  } catch (error) {
    console.error("Error in markAttendance:", error);
    throw error;
  }
};

export const checkOut = async () => {
  try {
    const response = await apiClient.post("/attendance/checkout");
    return response;
  } catch (error) {
    console.error("Error in checkOut:", error);
    throw error;
  }
};

// Function to fetch user attendance trends
export const fetchUserAttendanceTrends = async () => {
  try {
    const response = await apiClient.get("/attendance/attendance-trends"); // Adjust the endpoint if needed
    return response.data; // Return the fetched data
  } catch (error) {
    console.error("Error in fetchUserAttendanceTrends:", error);
    throw error; // Throw error if the API call fails
  }
};

