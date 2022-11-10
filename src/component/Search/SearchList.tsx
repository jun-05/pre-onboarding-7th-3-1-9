/* eslint-disable no-unused-vars */
import React from 'react';
import tw from 'tailwind-styled-components';
import SearchResult from './SearchResult';
import { sick } from '../../models/type';
import { useSelectVal } from '../../hooks/useSelectVal';

type SearchListProps = {
  sickData: sick[];
};

const SearchList = ({ sickData }: SearchListProps) => {
  const { selectedMemo, handleSelected } = useSelectVal();
  return (
    <SearchListBlock>
      <div className="text-sm text-gray-400 pl-5">추천 검색어</div>
      {sickData.map(data => (
        <SearchResult
          sickName={data.sickNm}
          key={`sick_${data.sickCd}`}
          handleSelected={() => handleSelected(data.sickNm)}
          selected={selectedMemo === data.sickNm}
        />
      ))}
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
