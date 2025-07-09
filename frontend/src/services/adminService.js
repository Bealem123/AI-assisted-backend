import apiClient from "./axios";

// Fetch current status
export const fetchCurrentStatus = async () => {
  try {
    const response = await apiClient.get(
      "/attendance/current-status"
    ); // Full URL
    return response.data;
  } catch (error) {
    console.error("Error fetching current status:", error);
    throw error;
  }
};



// Fetch history logs
export const fetchHistoryLogs = async () => {
  try {
    const response = await apiClient.get(
      "/attendance/history"
    );
    return response.data; // Adjust based on your backend's response structure
  } catch (error) {
    console.error("Error fetching history logs:", error);
    throw error;
  }
};

// Fetch notifications
export const fetchNotifications = async () => {
  try {
    const response = await apiClient.get(
      "/attendance/notifications"
    );
    return response.data; // Adjust based on your backend's response structure
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
};

export const fetchReports = async (userId, month) => {
  try {
    const response = await apiClient.get("/attendance/report", {
      params: { userId:1, month:11 }, // Include the required query parameters
    });
    return response.data; // Adjust based on your backend's response structure
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
};


// Fetch summary
export const fetchSummary = async () => {
  try {
    const response = await apiClient.get("/admin/attendance-summary");
    return response.data; // Adjust based on your backend's response structure
  } catch (error) {
    console.error("Error fetching summary:", error);
    throw error;
  }
};

export const deleteUserById = async (id) => {
  try {
    const response = await apiClient.delete(`/admin/user/${id}`);
    return response.data; // Adjust based on your backend's response structure
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};


export const updateUserRole = async (userId, newRole) => {
  try {
    const response = await apiClient.put(`/admin/user/${userId}/role`, {
      newRole,
    });
    return response.data; // Return the response data for success feedback
  } catch (error) {
    console.error("Error updating user role:", error);
    throw error; // You can also show a more user-friendly error message here
  }
};


export const exportAttendanceData = async () => {
  try {
    return await apiClient.get("/admin/export-attendance", {
      responseType: "blob", // Treat the response as binary data
    });
  } catch (error) {
    console.error("Error fetching attendance data:", error);
    throw error; // Throw the error for further handling
  }
};