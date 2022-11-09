import React from 'react';
import tw from 'tailwind-styled-components';
import SearchResult from './SearchResult';

const SearchList = () => {
  return (
    <SearchListBlock>
      <div className="text-sm text-gray-400 pl-5">추천 검색어</div>
      <SearchResult sickName={'갑상선암'} selected />
      <SearchResult sickName={'췌장암'} />
    </SearchListBlock>
  );
};
const SearchListBlock = tw.div<any>`
relative
my-2
bg-white
w-full
pt-4
rounded-2xl
`;

export default SearchList;
