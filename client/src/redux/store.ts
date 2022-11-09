import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducer/searchSlice';

const store = configureStore({
  reducer: {
    searchData: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
