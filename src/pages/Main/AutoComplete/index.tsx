import React from 'react';
import { useAppSelector } from 'redux/hooks';
import AutoCompleteUI from './AutoComplete';

const AutoComplete = () => {
  const { searchWord, items, isLoading } = useAppSelector(state => state.search);

  return (
    <>
      <AutoCompleteUI searchWord={searchWord} items={items} isLoading={isLoading} />
    </>
  );
};

export default AutoComplete;
