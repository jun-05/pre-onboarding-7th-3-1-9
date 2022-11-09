import { createSlice } from '@reduxjs/toolkit';

export interface testTypeData {
  [key: string]: number | string;
}

export interface testType {
  testList: testTypeData[];
  testDetail: testTypeData[];
}
const initialState = {
  testList: [],
  testDetail: {},
};

export const searchSlice = createSlice({
  name: 'searchList',
  initialState,
  reducers: {
    setTestList: (state, action) => {
      state.testList = action.payload;
    },
    setTestDetail: (state, action) => {
      state.testDetail = action.payload;
    },
  },
});

export const { setTestList, setTestDetail } = searchSlice.actions;

export default searchSlice.reducer;
