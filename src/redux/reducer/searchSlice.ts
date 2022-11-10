import { createSlice } from '@reduxjs/toolkit';
import { SliceState } from '@types';

const initialState: SliceState = {
  searchWord: '',
  isLoading: false,
  isOpen: false,
  itemsLength: 0,
  selectIndex: -1,
};

export const SearchSlice = createSlice({
  name: 'searchItem',
  initialState,
  reducers: {
    setItemsLength: (state, action) => {
      state.itemsLength = action.payload;
    },
    setSearchWord: (state, action) => {
      state.searchWord = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setSelectIndex: (state, action) => {
      state.selectIndex = action.payload;
    },
  },
});

export const { setItemsLength, setSearchWord, setIsLoading, setIsOpen, setSelectIndex } =
  SearchSlice.actions;

export default SearchSlice.reducer;
