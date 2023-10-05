import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

service.interceptors.request.use((config: any) => {
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  return config;
});

export default service;