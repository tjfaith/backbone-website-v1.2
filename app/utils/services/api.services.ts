import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BACK_END_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "1",
  },
});

instance.interceptors.request.use(
  (config) => {
    // const token = `Bearer ${CookiesServices().getAccessToken()}`;
    // if (token) {
    //   config.headers["authorization"] = token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
