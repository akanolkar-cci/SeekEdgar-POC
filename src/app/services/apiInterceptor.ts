import axios, { AxiosInstance } from "axios"; 

import { BASE_URL, PORT } from "../utils/constants/apiUrlConstants";

const baseURL = `http://${BASE_URL}:${PORT}`;

const axiosInstance: AxiosInstance = axios.create({ 
  baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Axios Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
