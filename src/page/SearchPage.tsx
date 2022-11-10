import React from 'react';
import SearchContainer from '../component/Search/SearchContainer';
import { SearchEventProvider } from '../context/SearchEventContext';
import { useSearchContext } from './../context/SearchContext';

export const SearchPage = () => {
  const { sickData } = useSearchContext();
  return (
    <SearchEventProvider sickData={sickData}>
      <SearchContainer sickData={sickData} />
    </SearchEventProvider>
  );
};

export default SearchPage;
