import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type SliceState = {
  searchWord: string;
  isLoading: false;
  items: ISicks[];
};

export interface ISicks {
  sickCd: string;
  sickNm: string;
}

const initialState: SliceState = {
  searchWord: "",
  isLoading: false,
  items: [],
};

export const getTrendDatas = createAsyncThunk('get/trend_data', async () => {
  // const {
  //   data: {
  //     report: { daily },
  //   },
  // } = await instance.get('/server/wanted_FE_trend-data-set.json');

  // const { data } = await instance.get('/server/wanted_FE-media-channel-data-set.json');
  const data = "";
  return { data };
});

export const SearchSlice = createSlice({
  name: "searchItem",
  initialState,
  reducers: {
    setSearchWord:  (state, action) => {
      state.searchWord = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getTrendDatas.fulfilled, (state, action) => {
      // state.trendDatas = action.payload.data;
    });
  },
});

export const { setSearchWord, setIsLoading, setItems } = SearchSlice.actions;

export default SearchSlice.reducer;
