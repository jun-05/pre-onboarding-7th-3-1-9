/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { SickItem } from '../model/SickItem';
import { ParseBoldWord } from '../utils/ParseBoldWord';
import { SearchIcon } from './SearchIcon';

export function SickSearchItem({
  result,
  searchKeyword,
}: {
  result: SickItem;
  searchKeyword: string;
}) {
  return (
    <li css={sickItem}>
      <SearchIcon />
      <p>
        <ParseBoldWord sickName={result.sickNm} keyword={searchKeyword} />
      </p>
    </li>
  );
}

const sickItem = css`
  &:hover {
    background-color: #e6e6e6;
    border-radius: 10px;
  }

  position: relative;
  font-size: 1.4rem;
  padding: 10px 20px;
  display: flex;
  align-items: center;

  p {
    padding-left: 24px;
  }
`;
