import { get } from './axiosInstance';

export const fetchSickSearchResultList = async ({ keyword }: { keyword: string }) => {
  if (keyword === '') {
    return;
  }

  const { data } = await get({
    url: `/sick?q=${keyword}`,
  });

  return data;
};
