import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducer/searchSlice';

const reducers = combineReducers({
  search: searchReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
