import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  config => {
    console.info('API 호출 횟수');
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response);
  }
);

