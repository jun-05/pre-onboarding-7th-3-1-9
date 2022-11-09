import { Fragment, useEffect, useState } from 'react';
import { fetchSickSearchResultList } from '../apis/fetchSickSearchResultList';
import { SickSearchItem } from '../components/SickSearchItem';
import { SickItem } from '../model/SickItem';

export function SickSearchPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sickSearchList, setSickSearchList] = useState<SickItem[]>([]);

  useEffect(() => {
    (async () => {
      const list = await fetchSickSearchResultList({ keyword: searchKeyword });

      setSickSearchList(list);
    })();
  }, [searchKeyword]);

  if (sickSearchList == null || searchKeyword.trim() === '') {
    return (
      <>
        <input type="search" onChange={e => setSearchKeyword(e.target.value)} />
        <p>검색어 없음</p>
      </>
    );
  }

  return (
    <>
      <input type="search" onChange={e => setSearchKeyword(e.target.value)} />
      <ul>
        {sickSearchList.map(result => (
          <Fragment key={result.sickCd}>
            <SickSearchItem result={result} searchKeyword={searchKeyword} />
          </Fragment>
        ))}
      </ul>
    </>
  );
}
