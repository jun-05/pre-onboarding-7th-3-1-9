import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface SerachState {
  searchWord: string;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: SerachState = {
  searchWord: '',
  isLoading: true,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchWord: (state, action) => {
      state.searchWord = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSearchWord, setIsLoading } = searchSlice.actions;
export default searchSlice.reducer;
