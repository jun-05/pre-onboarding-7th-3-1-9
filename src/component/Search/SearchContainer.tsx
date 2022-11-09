import React from 'react';
import tw from 'tailwind-styled-components';
import SearchForm from './SearchForm';
import SearchList from './SearchList';
const SearchContainer = () => {
  return (
    <SearchContainerBlock>
      <SearchTitleBlock>국내 모든 임상시험 검색하고 온라인으로 참여하기</SearchTitleBlock>
      <SearchContentsBlock>
        <SearchForm />
        <SearchList />
      </SearchContentsBlock>
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
w-[430px]
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
