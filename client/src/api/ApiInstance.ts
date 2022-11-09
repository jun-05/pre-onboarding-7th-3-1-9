import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
console.log(process.env.REACT_APP_BASE_URL);

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);
instance.interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    return Promise.reject(error.response);
  }
);
