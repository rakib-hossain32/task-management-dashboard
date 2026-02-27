import axios from "axios";

const instance = axios.create({
    baseURL: "https://task-api-eight-flax.vercel.app",
})

const useAxiosSecure = () => {
    return instance
}

export default useAxiosSecure