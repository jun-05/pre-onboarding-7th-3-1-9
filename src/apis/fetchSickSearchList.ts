import { get } from './axiosInstance';

export const fetchSickSearchList = async ({
  keyword,
  params,
}: {
  keyword: string;
  params: Record<string, string>;
}) => {
  const qs = new URLSearchParams(params).toString();
  if (keyword === '') {
    return;
  }

  const { data } = await get({
    url: `/sick?${qs}`,
  });

  return data;
};
