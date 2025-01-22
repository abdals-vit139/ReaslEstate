import axios from "axios";

const URL = "http://localhost:5000/api/v1";

const makeRequest = axios.create({
  baseURL: URL,
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
makeRequest.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default makeRequest;
