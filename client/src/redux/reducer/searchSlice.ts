import { createSlice } from '@reduxjs/toolkit';

export interface testType {
  searchData: sickData[];
  searchWords: string;
  loading: boolean;
  onfocus: boolean;
}
export interface sickData {
  sickCd: string;
  sickNm: string;
}
const initialState = {
  searchData: [],
  searchWords: '',
  loading: false,
  isOnFocus: false,
};

export const searchSlice = createSlice({
  name: 'searchList',
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
    setSearchWords: (state, action) => {
      state.searchWords = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setOnFocus: (state, action) => {
      state.isOnFocus = action.payload;
    },
  },
});

export const { setSearchData, setSearchWords, setLoading, setOnFocus } = searchSlice.actions;

export default searchSlice.reducer;
