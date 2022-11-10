import { cacheStorage } from '../utils/cacheStorage';
import { get } from './axiosInstance';

export const fetchSickSearchList = async (
  url: string,
  params: Record<string, string>,
  { useCache = false, expireSeconds = 30 } = {}
) => {
  const qs = new URLSearchParams(params).toString();
  const key = `${url}?${qs}`;

  if (useCache && cacheStorage.get(decodeURI(key)) != null) {
    return cacheStorage.get(`${decodeURI(key)}`);
  }

  console.log('calling api');

  const { data } = await get({
    url: `${url}?${qs}`,
  });

  if (useCache) {
    cacheStorage.set(decodeURI(key), data, expireSeconds);
  }

  return data;
};
