import { createSlice } from '@reduxjs/toolkit';

export type SliceState = {
  searchWord: string;
  isLoading: boolean;
  isOpen: boolean;
  items: ISicks[];
};

export interface ISicks {
  sickCd: string;
  sickNm: string;
}

const initialState: SliceState = {
  searchWord: '',
  isLoading: false,
  isOpen: false,
  items: [],
};

export const SearchSlice = createSlice({
  name: 'searchItem',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
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
  },
});

export const { setItems, setSearchWord, setIsLoading, setIsOpen } = SearchSlice.actions;

export default SearchSlice.reducer;
