import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import SearchForm from './SearchForm';
import SearchList from './SearchList';
import { clearCacheData } from '../../utils/cache';
import { useSelectVal } from '../../hooks/useSelectVal';
import { useSearchContext } from '../../context/SearchContext';
import NoResult from './NoResult';

const SearchContainer = () => {
  const { sickData, inputValue } = useSearchContext();
  const { selected, handleSelected, initValue, upDownValHandle } = useSelectVal();

  useEffect(() => {
    initValue();
  }, [initValue, inputValue]);

  const onKeyEventHanler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    console.log('캡처링');
    const typing = e.code;
    upDownValHandle(typing, sickData);
  };

  return (
    <SearchContainerBlock onKeyDownCapture={onKeyEventHanler}>
      <SearchTitleBlock>국내 모든 임상시험 검색하고 온라인으로 참여하기</SearchTitleBlock>
      <SearchContentsBlock>
        <SearchForm selected={selected} />
        {sickData.length ? (
          <SearchList sickData={sickData} handleSelected={handleSelected} selectedMemo={selected} />
        ) : (
          inputValue && <NoResult />
        )}
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
