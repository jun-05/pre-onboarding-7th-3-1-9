import React from 'react';
import tw from 'tailwind-styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

type SearchResultProps = {
  sickName: string;
  selected?: boolean;
};

const SearchResult = ({ sickName, selected = false }: SearchResultProps) => {
  return (
    <SearchResultBlock $selected={selected}>
      <AiOutlineSearch /> <div>{sickName}</div>
    </SearchResultBlock>
  );
};
const SearchResultBlock = tw.div<any>`
flex
items-center



text-lg
font-medium
mt-2
px-5

[&>div]:pl-2
rounded-sm

${p => (p.$selected ? 'bg-gray-200 outline outline-2 outline-gray-400' : '')}
`;

export default SearchResult;
