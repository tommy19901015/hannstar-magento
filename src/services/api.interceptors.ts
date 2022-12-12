import axios, { AxiosError } from "axios";

const service = axios.create({
  baseURL: "https://magentodev.hannstar.com/",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

service.interceptors.request.use(
  (config) => {
    if (process.env.USE_FAKE_ENV) {
    }
    return config;
  },
  (error) => {
    console.log("Axios interceptors", error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.data.isSuccess === false) {
    }

    if (response.status === 401 || response.status === 403) {
    }
    console.log("api isSuccess");
    return response.data;
  },
  (error: AxiosError) => {
    console.log(`[error] --> ${error}`, error);
    if (error.response?.status === 401 || error.response?.status === 403) {
    }
    throw error;
  }
);

export default service;
