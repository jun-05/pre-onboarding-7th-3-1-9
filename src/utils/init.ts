import { HttpClient } from '../api/HttpService';
import { SearchService } from '../service/SearchService';

export default function init() {
  const httpClient = new HttpClient('http://localhost:4000/');
  const serarchService = new SearchService(httpClient, 'sick');
  return { serarchService };
}
