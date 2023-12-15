import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 10000,
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
