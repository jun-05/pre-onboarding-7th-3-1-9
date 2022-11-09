import { instance } from './ApiInstance';

export const AxiosService = {
  getSearch: async (param: string) => {
    if ('caches' in window) {
      if (param === '') return [];
    }
    let query = {
      sickNm: param,
    };
  },
};
