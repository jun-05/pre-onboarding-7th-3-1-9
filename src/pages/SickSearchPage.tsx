/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Fragment, KeyboardEvent, MouseEventHandler, useEffect, useState } from 'react';
import { fetchSickSearchList } from '../apis/fetchSickSearchList';
import { MainLayout } from '../components/MainLayout';
import { SickSearchInput } from '../components/SickSearchInput';
import { SickSearchItem } from '../components/SickSearchItem';
import { SickItem } from '../model/SickItem';

export function SickSearchPage() {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [sickSearchList, setSickSearchList] = useState<SickItem[]>([]);
  const [isOpenSearch, setOpenSearch] = useState<boolean>(false);
  const [selectIndex, setSelectIndex] = useState<number>(-1);

  // 관련 검색어 창 제어 관련 코드
  const onSearchInputClick: MouseEventHandler<HTMLParagraphElement> = e => {
    e.stopPropagation();
    setOpenSearch(true);
  };

  // 방향키로 검색어 이동
  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (searchKeyword == null) {
      return;
    }

    const maxIndex = sickSearchList.length - 1;

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

  const onSearchCloseClick = () => {
    setOpenSearch(false);
    setSelectIndex(-1);
  };

  useEffect(() => {
    (async () => {
      if (searchKeyword == null || searchKeyword.trim() === '') {
        return;
      }

      const sickList = await fetchSickSearchList(
        '/sick',
        { sickNm_like: searchKeyword },
        { useCache: true }
      );

      if (sickList == null) {
        return;
      }

      setSickSearchList(sickList);
    })();
  }, [searchKeyword]);

  // 검색 결과가 없을 때
  if (searchKeyword.trim() === '' || sickSearchList.length === 0) {
    return (
      <MainLayout onClick={onSearchCloseClick}>
        <SickSearchInput
          onChange={e => setSearchKeyword(e.target.value)}
          onClick={onSearchInputClick}
          onKeyUp={onKeyUp}
        />

        {isOpenSearch && (
          <SickSearchList onClick={e => e.stopPropagation()}>
            <p css={suggestSearchKeyword}>검색어 없음</p>
          </SickSearchList>
        )}
      </MainLayout>
    );
  }

  // 검색 결과가 있을 때
  return (
    <MainLayout onClick={onSearchCloseClick}>
      <SickSearchInput
        onChange={e => setSearchKeyword(e.target.value)}
        onClick={onSearchInputClick}
        onKeyUp={onKeyUp}
      />

      {isOpenSearch && (
        <SickSearchList>
          <li css={suggestSearchKeyword}>추천 검색어</li>

          {sickSearchList.map((reslut, index) => (
            <Fragment key={reslut.sickCd}>
              <SickSearchItem
                result={reslut}
                searchKeyword={searchKeyword}
                selectIndex={selectIndex}
                index={index}
                // onMouseOver={onMouseOver}
              />
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
