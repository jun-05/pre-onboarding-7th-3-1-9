import React, { KeyboardEvent, useState, useEffect } from 'react';
import Title from './components/Title'
import SearchBar from './components/SearchBar';
import { getSick } from './api/cache';
import { IAutoDatas } from './interface/types';
import AutoSearchDataContainer from './container/AutoSearchDataContainer/AutoSearchDataContainer';
import { Layout, SearchContainer } from './components/style';
const App = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [keyItems, setKeyItems] = useState<IAutoDatas[]>([]);
  const [selectIndex, setSelectIndex] = useState<number>(-1);

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (keyword == null) {
      return;
    }

    const maxIndex = keyItems.length - 1;
    if (e.key === 'ArrowUp') {
      if (selectIndex === -1) {
        setSelectIndex(maxIndex);
      } else {
        setSelectIndex(selectIndex - 1);
      }
    }

    if (e.key === 'ArrowDown') {
      if (selectIndex === maxIndex) {
        setSelectIndex(-1);
      } else {
        setSelectIndex(selectIndex + 1);
      }
    }
  };

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) {
        const data = getSick(keyword)
        data.then((res) => setKeyItems(res))
      }
    }, 200)
    return () => {
      clearTimeout(debounce)
    }
  }, [keyword])

  return (
    <Layout>
      <SearchContainer>
        <Title topContent={'국내 모든 임상시험 검색하고'} bottomContent={'온라인으로 참여하기'} />
        <SearchBar keyword={keyword} onChangeData={onChangeData} onKeyUp={onKeyUp} />
        {keyItems.length > 0 && keyword && (
            <AutoSearchDataContainer keyItems={keyItems} selectIndex={selectIndex} setKeyword={setKeyword} />
        )}
      </SearchContainer>
    </Layout>
  );
}


export default App;
