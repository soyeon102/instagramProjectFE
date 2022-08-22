import { configureStore } from '@reduxjs/toolkit';
import articleSlice from '../modules/articleSlice';
import userSlice from '../modules/userSlice';
import commentSlice from '../modules/commentSlice';
import myArticleSlice from '../modules/myArticleSlice';

export const store = configureStore({
  reducer: {
    article: articleSlice,
    user: userSlice,
    comment: commentSlice,
    myArticle: myArticleSlice,
  },
});
