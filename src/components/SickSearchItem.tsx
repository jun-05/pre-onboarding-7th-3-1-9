/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SickItem } from '../model/SickItem';
import { ParseBoldString } from '../utils/ParseBoldString';
import { SearchIcon } from './Icon/SearchIcon';

export function SickSearchItem({
  result,
  searchKeyword,
  selectIndex,
  index,
}: {
  result: SickItem;
  searchKeyword: string;
  selectIndex: number;
  index: number;
}) {
  return (
    <li css={sickItem} className={index === selectIndex ? 'select' : ''}>
      <SearchIcon />
      <ParseBoldString sickName={result.sickNm} keyword={searchKeyword} />
    </li>
  );
}

const sickItem = css`
  &.select {
    background-color: #e6e6e6;
    border-radius: 10px;
  }

  position: relative;
  font-size: 1.4rem;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;
