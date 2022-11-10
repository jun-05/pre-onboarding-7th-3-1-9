/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import tw from 'tailwind-styled-components';
import SearchResult from './SearchResult';
import { sick } from '../../models/type';

type SearchListProps = {
  sickData: sick[];
  selectedMemo: string;
  handleSelected: (value: string, idx: number) => void;
};

const SearchList = ({ sickData, selectedMemo, handleSelected }: SearchListProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickList = (name: string, idx: number) => {
    handleSelected(name, idx);
    inputRef.current?.focus();
  };

  return (
    <SearchListBlock>
      <div className="text-sm text-gray-400 pl-5">추천 검색어</div>
      {sickData.map((sickData, idx) => (
        <SearchResult
          sickName={sickData.sickNm}
          key={`sick_${sickData.sickCd}`}
          onClickList={() => onClickList(sickData.sickNm, idx)}
          selected={selectedMemo === sickData.sickNm}
        />
      ))}
      <input ref={inputRef} readOnly className="opacity-0 w-0 overflow-hidden" />
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
