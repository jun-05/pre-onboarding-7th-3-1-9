/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Fragment, MouseEventHandler, useEffect, useState } from 'react';
import { fetchSickSearchResultList } from '../apis/fetchSickSearchResultList';
import { MainLayout } from '../components/MainLayout';
import { SickSearchInput } from '../components/SickSearchInput';
import { SickSearchItem } from '../components/SickSearchItem';
import { SickItem } from '../model/SickItem';

export function SickSearchPage() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sickSearchList, setSickSearchList] = useState<SickItem[]>([]);
  const [isOpenSearch, setOpenSearch] = useState(false);

  const onSearchInputClick: MouseEventHandler<HTMLParagraphElement> = e => {
    e.stopPropagation();
    setOpenSearch(true);
  };

  useEffect(() => {
    (async () => {
      const list = await fetchSickSearchResultList({ keyword: searchKeyword });

      setSickSearchList(list);
    })();
  }, [searchKeyword]);

  if (sickSearchList == null || searchKeyword.trim() === '' || sickSearchList.length === 0) {
    return (
      <MainLayout onClick={() => setOpenSearch(false)}>
        <SickSearchInput
          onChange={e => setSearchKeyword(e.target.value)}
          onClick={onSearchInputClick}
        />
        {isOpenSearch && (
          <SickSearchList onClick={e => e.stopPropagation()}>
            <p css={suggestSearchKeyword}>검색어 없음</p>
          </SickSearchList>
        )}
      </MainLayout>
    );
  }

  return (
    <MainLayout onClick={() => setOpenSearch(false)}>
      <SickSearchInput
        onChange={e => setSearchKeyword(e.target.value)}
        onClick={onSearchInputClick}
      />

      {isOpenSearch && (
        <SickSearchList>
          <li css={suggestSearchKeyword}>추천 검색어</li>
          {sickSearchList
            .filter(result => result.sickNm.match(new RegExp(searchKeyword, 'i')))
            .map(filterResult => (
              <Fragment key={filterResult.sickCd}>
                <SickSearchItem result={filterResult} searchKeyword={searchKeyword} />
              </Fragment>
            ))}
        </SickSearchList>
      )}
    </MainLayout>
  );
}

const SickSearchList = styled.ul`
  width: 100%;
  max-width: 490px;
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  padding: 20px 10px;
  box-sizing: border-box;
`;

const suggestSearchKeyword = css`
  padding: 10px 20px;
  font-size: 1.3rem;
  color: #a7afb7;
`;
