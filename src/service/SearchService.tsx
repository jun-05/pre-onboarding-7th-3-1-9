import { HttpClient } from '../api/HttpService';
import { SearchInterface } from '../models/interface';

export class SearchService implements SearchInterface {
  #httpClient;
  #endPoint;

  constructor(httpClient: HttpClient, endPoint: string) {
    this.#httpClient = httpClient;
    this.#endPoint = endPoint;
  }
  getSick(inputValue: string) {
    return this.#httpClient.get(this.#endPoint, { params: { q: inputValue } });
  }
}
