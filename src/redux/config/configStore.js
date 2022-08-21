import { configureStore } from '@reduxjs/toolkit';
import articleSlice from '../modules/articleSlice';
import userSlice from '../modules/userSlice';

export const store = configureStore({
  reducer: {
    article: articleSlice,
    user: userSlice,
  },
});
