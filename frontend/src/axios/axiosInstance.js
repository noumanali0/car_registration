import axios from "axios";

const baseURL = "http://localhost:4000";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((req) => {
  if (localStorage.getItem("login")) {
    req.headers.authorization = `Bearer ${localStorage.getItem("login")}`;
  }
  return req;
});

export default axiosInstance;
