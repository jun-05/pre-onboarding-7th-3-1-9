import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { fetchSickSearchResultList } from '../apis/fetchSickSearchResultList';
import { SickItem } from '../model/SickItem';
import { ParseBoldWord } from '../utils/ParseBoldWord';

export function SickSearchPage() {
  const [keyword, setKeyword] = useState('');
  const [searchResultList, setSearchResultList] = useState<SickItem[]>([]);

  useEffect(() => {
    (async () => {
      const list = await fetchSickSearchResultList({ keyword });
      setSearchResultList(list);
    })();
  }, [keyword]);

  if (searchResultList == null || keyword.trim() === '') {
    return (
      <>
        <input type="search" onChange={e => setKeyword(e.target.value)} />
        <p>검색어 없음</p>
      </>
    );
  }
  return (
    <>
      <input type="search" onChange={e => setKeyword(e.target.value)} />
      <ul>
        {searchResultList.map(result => (
          <SearchResultItem key={result.sickCd}>
            <ParseBoldWord sickName={result.sickNm} keyword={keyword} />
          </SearchResultItem>
        ))}
      </ul>
    </>
  );
}

const SearchResultItem = styled.li`
  border: 1px solid;
`;
