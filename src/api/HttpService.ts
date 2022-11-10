import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

interface HttpClientInterface {
  get: (endPoint: string, options?: AxiosRequestConfig<any>) => Promise<AxiosResponse<any, any>>;
}

export class HttpClient implements HttpClientInterface {
  #baseURL;

  constructor(baseURL: string) {
    this.#baseURL = baseURL;
  }

  get = async (endPoint: string, options?: AxiosRequestConfig<any>) => {
    console.log("httpURL")
    console.log(this.#baseURL+endPoint)
    console.log(this.#baseURL+endPoint+options?.params)
    return await axiosInstance.get(this.#baseURL + endPoint, { ...options });
  };
}
