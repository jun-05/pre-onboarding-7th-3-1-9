import React from 'react';

export type sick = {
  sickCd: string;
  sickNm: string;
};

export type SearchState = {
  sickData: sick[];
  setSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
};
