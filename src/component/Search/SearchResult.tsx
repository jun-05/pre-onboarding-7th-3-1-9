import React from 'react';
import tw from 'tailwind-styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchContext } from './../../context/SearchContext';
import { parseTextBold } from '../../utils/text';

type SearchResultProps = {
  sickName: string;
  selected?: boolean;
  onClickList: () => void;
};

const SearchResult = ({ sickName, selected = false, onClickList }: SearchResultProps) => {
  const { inputValue } = useSearchContext();

  return (
    <SearchResultBlock $selected={selected} onClick={onClickList}>
      <AiOutlineSearch />
      <div dangerouslySetInnerHTML={{ __html: parseTextBold(sickName, inputValue) }}></div>
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
rounded-sm
cursor-pointer

[&>div]:pl-2
last:mb-4
hover:bg-gray-200
${p => (p.$selected ? 'bg-gray-200 outline outline-2 outline-gray-400' : '')}
`;

export default SearchResult;
