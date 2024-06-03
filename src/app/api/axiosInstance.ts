import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://api.gold888.kz/api", 
  timeout: 10000, 
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add authorization token to headers if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Any status code that lies within the range of 2xx cause this function to trigger
    return response;
  },
  (error: AxiosError) => {
    // Handle response error
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      // Add your logic here, like redirecting to login page
      console.error("Unauthorized access - possibly redirect to login");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
