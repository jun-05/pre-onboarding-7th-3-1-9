import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducer/searchSlice';

const reducer = combineReducers({
  searchData: searchReducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
