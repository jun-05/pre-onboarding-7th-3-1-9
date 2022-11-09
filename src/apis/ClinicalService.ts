import { ISicks } from 'redux/reducer/searchSlice';
import instance from './axiosInstance';

const URL_SICK = 'sick';

export const getSick = async (param: string): Promise<ISicks[]> => {
  if (param === '') return [];
  if ('caches' in window) {
    const payload = {
      sickNm_like: param,
    };

    const queryStr = new URLSearchParams(payload).toString();

    const cacheStorage = await caches.open(URL_SICK);
    // sick?sickNm_like=콜레라
    const cachedResponse = await cacheStorage.match(queryStr);

    // If no cache exists
    if (!cachedResponse || !cachedResponse.ok) {
      const config = {
        params: payload,
      };
      const { data } = await instance.get(`/${URL_SICK}`, config);

      cacheStorage.put(queryStr, new Response(JSON.stringify(data)));
      return data;
    }

    const cached = await cachedResponse?.json();
    return cached;
  }
  
  return [];
};
