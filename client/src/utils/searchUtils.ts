export interface SearchType {
  empty: string;
  filled: string;
  searchData: [];
}

// data[]
export interface Indexable extends SearchType {
  [key: string]: string | [];
}
// 변수 : 타입 형태로
export const SearchReData = ({ empty, filled, searchData }: SearchType) => {
  const searchRec = searchData ? filled : empty;
  return searchRec;
};
