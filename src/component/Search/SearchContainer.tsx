import React from 'react';
import tw from 'tailwind-styled-components';
import SearchForm from './SearchForm';
import SearchList from './SearchList';
import { clearCacheData } from '../../utils/cache';
import { sick } from '../../models/type';
import { useSearchEventContext } from '../../context/SearchEventContext';

type SearchContainerProps = {
  sickData: sick[];
};

const SearchContainer = ({ sickData }: SearchContainerProps) => {
  const { upSelectNumber, downSelectNumber } = useSearchEventContext();

  const onKeyEventHanler = (e: React.KeyboardEvent<HTMLImageElement>) => {
    const typing = e.code;
    if (typing === 'ArrowDown') {
      upSelectNumber();
    } else if (typing === 'ArrowUp') {
      downSelectNumber();
    }
  };

  return (
    <SearchContainerBlock onKeyDown={onKeyEventHanler}>
      <SearchTitleBlock>국내 모든 임상시험 검색하고 온라인으로 참여하기</SearchTitleBlock>
      <SearchContentsBlock>
        <SearchForm />
        {sickData.length ? <SearchList sickData={sickData} /> : ''}
      </SearchContentsBlock>
      <button onClick={() => clearCacheData()}>캐쉬 초기화</button>
    </SearchContainerBlock>
  );
};
const SearchContainerBlock = tw.div<any>`
flex
flex-col
items-center
bg-blue-200
w-full

`;
const SearchTitleBlock = tw.div<any>`
mt-10
text-center
md:w-[430px]
w-80
text-3xl
font-bold
whitespace-normal
`;

const SearchContentsBlock = tw.form<any>`
flex
flex-col
mt-10
w-[720px]

`;

export default SearchContainer;
