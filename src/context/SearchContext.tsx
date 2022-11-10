import React, { createContext, useState, useEffect, useContext } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { SearchState, sick } from '../models/type';
import { addDataIntoCache, getSingleCacheData } from '../utils/cache';
import { isBlankVal } from '../utils/validation';

import { SearchService } from './../service/SearchService';

const SearchContext = createContext<SearchState | null>(null);

export const useSearchContext = (): SearchState => {
  const state = useContext(SearchContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
};

export function SearchProvider({
  children,
  SearchService,
}: {
  children: React.ReactNode;
  SearchService: SearchService;
}) {
  const [inputValue, setInputValue] = useState('');
  const [sickData, setSickData] = useState<sick[]>([]);

  const setSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const state: SearchState = {
    sickData,
    inputValue,
    setSearchInput,
  };

  const debouncedSearchTerm = useDebounce(inputValue, 300);

  useEffect(() => {
    const getSick = async () => {
      if (isBlankVal(debouncedSearchTerm)) {
        return;
      }
      const SearchURL = `https://json-server-beryl.vercel.app/api/sick?q=${debouncedSearchTerm.trim()}`;
      console.log('SearchURL');
      console.log(SearchURL);
      const cacheData = await getSingleCacheData(debouncedSearchTerm.trim(), SearchURL);
      if (cacheData.length > 0) {
        setSickData(cacheData);
      } else {
        const response = await SearchService.getSick(debouncedSearchTerm.trim());
        setSickData(response.data);
        addDataIntoCache(debouncedSearchTerm.trim(), SearchURL, response.data);
        console.info('calling api');
      }
    };
    if (debouncedSearchTerm) {
      getSick();
    } else {
      setSickData([]);
    }
  }, [SearchService, debouncedSearchTerm]);

  return <SearchContext.Provider value={state}>{children}</SearchContext.Provider>;
}
