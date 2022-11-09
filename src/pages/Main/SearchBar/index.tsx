import React, { useEffect } from 'react';
import { AxiosError } from "axios";
import SearchBarUI from './SearchBar';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getSick } from 'apis/ClinicalService';
import { ISicks } from 'redux/reducer/searchSlice';
import { setSearchWord, setIsLoading, setItems } from 'redux/reducer/searchSlice';

const SearchBar = () => {
  const { searchWord } = useAppSelector(state => state.search);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const getSickName = async (text: string) => { 
      try {
        dispatch(setIsLoading(true));
        const searchResult:ISicks[] = await getSick(text);
        dispatch(setItems(searchResult));
        dispatch(setIsLoading(false));
        
      } catch (err) {
        dispatch(setIsLoading(false));
        
        if (err instanceof AxiosError) {
          console.error(err.response?.data);
        } else {
          console.error(err);
        }
      }
    }
    const delay = setTimeout(() => getSickName(searchWord), 300);

    return () => clearTimeout(delay);
  }, [searchWord, dispatch]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchWord(e.target.value));
  };

  const handleDropDownKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //input에 값이 있을때만 작동
    // if (isHaveInputValue) {
    //   if (
    //     event.key === 'ArrowDown' &&
    //     dropDownList.length - 1 > dropDownItemIndex
    //   ) {
    //     setDropDownItemIndex(dropDownItemIndex + 1)
    //   }

    //   if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
    //     setDropDownItemIndex(dropDownItemIndex - 1)
    //   if (event.key === 'Enter' && dropDownItemIndex >= 0) {
    //     clickDropDownItem(dropDownList[dropDownItemIndex])
    //     setDropDownItemIndex(-1)
    //   }
    // }
  }

  const onFocusInput = () => {
    console.log('focus!');
  }
  return (
    <>
      <SearchBarUI value={searchWord} onChange={onSearchChange} onFocus={onFocusInput} onKeyUp={handleDropDownKey}/>
    </>
  );
};

export default SearchBar;
