import { instance } from './ApiInstance';
import { sickData } from '../redux/reducer/searchSlice';
const END_POINT = 'sick';

export const AxiosService = {
  getCashSearch: async (param: string): Promise<sickData[]> => {
    if ('caches' in window) {
      if (param === '') return [];
      const query = {
        sickNm_like: param,
      };

      const queryStr = new URLSearchParams(query).toString();
      const cashStorage = await caches.open(END_POINT);
      const cashedResponse = await cashStorage.match(queryStr);

      if (!cashedResponse || !cashedResponse.ok) {
        const config = {
          params: query,
        };
        const { data } = await instance.get(`/${END_POINT}`, config);
        console.info('calling api');

        cashStorage.put(`${param}`, new Response(JSON.stringify(data)));
        return data;
      }
      const newCached = await cashedResponse?.json();

      return newCached;
    }
    return [];
  },
};
