import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://task-api-eight-flax.vercel.app",
});

// Attach token automatically to every request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;