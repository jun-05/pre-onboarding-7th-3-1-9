import { HttpClient } from '../api/HttpService';
import { SearchService } from '../service/SearchService';
import { clearCacheData } from './cache';

const CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

const checkExpiration = () => {
  const nowTime = Date.now();
  const prevAcces = localStorage.getItem('accessTime');
  if (prevAcces) {
    nowTime - parseInt(prevAcces) > CACHE_EXPIRATION && clearCacheData();
    localStorage.setItem('accessTime', nowTime.toString());
    return;
  }
  localStorage.setItem('accessTime', nowTime.toString());
};

export default function init() {
  checkExpiration();

  const httpClient = new HttpClient('https://json-server-beryl.vercel.app/api/');
  const serarchService = new SearchService(httpClient, 'sick');
  return { serarchService };
}
