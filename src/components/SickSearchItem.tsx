/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { SickItem } from '../model/SickItem';
import { ParseBoldWord } from '../utils/ParseBoldWord';

export function SickSearchItem({
  result,
  searchKeyword,
}: {
  result: SickItem;
  searchKeyword: string;
}) {
  return (
    <li css={sickItem}>
      <ParseBoldWord sickName={result.sickNm} keyword={searchKeyword} />
    </li>
  );
}

const sickItem = css`
  border: 1px solid;
  font-size: 1.4rem;
`;
