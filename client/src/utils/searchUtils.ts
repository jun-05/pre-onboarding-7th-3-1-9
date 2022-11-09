import { sickData } from 'redux/reducer/searchSlice';

export interface Indexable extends sickData {
  [key: string]: string | any[];
  searchData: sickData[];
}
// 변수 : 타입 형태로

export const sickNmMap = ({ searchData }: Indexable) => {
  searchData?.map(el => {
    return {
      sickNm: el?.sickNm,
    } as Indexable;
  });
};
