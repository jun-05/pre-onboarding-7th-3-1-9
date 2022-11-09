import React from 'react';
import SearchBarUI from './SearchBar';
import { useAppDispatch } from 'redux/hooks';
import { setSearchWord, setIsOpen } from 'redux/reducer/searchSlice';

const SearchBar = () => {
  const dispatch = useAppDispatch();

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
  };

  const onFocusInput = () => {
    dispatch(setIsOpen(true));
  };

  const onBlur = () => {
    dispatch(setIsOpen(false));
  };
  return (
    <>
      <SearchBarUI
        onChange={onSearchChange}
        onFocus={onFocusInput}
        onBlur={onBlur}
        onKeyUp={handleDropDownKey}
      />
    </>
  );
};

export default SearchBar;
