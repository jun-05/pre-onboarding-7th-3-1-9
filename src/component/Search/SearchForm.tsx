import React from 'react';
import tw from 'tailwind-styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchContext } from './../../context/SearchContext';
import { isBlankVal } from './../../utils/validation';

const SearchForm = ({ selected }: { selected: string }) => {
  const { setSearchInput } = useSearchContext();
  return (
    <SearchFormBlock>
      <SearchIconBlock>
        <AiOutlineSearch />
      </SearchIconBlock>
      <SearchInputBlock placeholder="질환명을 입력해주세요" type="text" onChange={setSearchInput} />
      <SearchFormButton
        onClick={e => {
          e.preventDefault();
          if (isBlankVal(selected)) {
            return;
          }
          alert(selected + '검색');
        }}
      >
        검색
      </SearchFormButton>
    </SearchFormBlock>
  );
};
const SearchFormBlock = tw.div<any>`
flex
items-center
relative
w-full
h-14
rounded-xl
`;

const SearchIconBlock = tw.div<any>`
flex
items-center
justify-center

absolute
h-full
w-14
text-2xl
bg-white


top-0
left-0
rounded-l-full
`;

const SearchInputBlock = tw.input<React.InputHTMLAttributes<HTMLInputElement>>`
w-screen
h-full

pl-14
pr-[90px]
text-2xl
rounded-l-full
rounded-r-full

focus:ring-4
focus:outline-none
`;

const SearchFormButton = tw.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
absolute
top-0
right-0
w-[90px]
h-full
bg-blue-500
rounded-r-full

text-white
font-bold
`;

export default SearchForm;
