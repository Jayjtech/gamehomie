import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Replace with your API base URL
  timeout: 10000, // Timeout if no response in 10 seconds
  headers: {
    "Content-Type": "application/json", // Set default content-type
  },
});

// Interceptors for request and response
axiosInstance.interceptors.request.use(
  (config) => {
    // Add token to headers before every request
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle common error types (like 401, 500) globally here
    if (error.response && error.response.status === 401) {
      // Logout user, redirect to login page, etc.
      console.error("Unauthorized, logging out...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
