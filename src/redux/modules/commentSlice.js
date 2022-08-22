import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from '../../shared/Cookie';

const BASE_URL = 'http://13.209.97.60';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: getCookie('ACCESS_TOKEN'),
  },
};

// 생성
export const __createComment = createAsyncThunk(
  'createComment',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        `${BASE_URL}/api/auth/comment/${payload.id}`,
        payload.content,
        config
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: {
    // 생성
    [__createComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__createComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__createComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 전체 조회
    // [__readArticles.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__readArticles.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.articles = action.payload;
    // },
    // [__readArticles.rejected]: (state, action) => {
    //   state.error = action.payload;
    // },
    // 상세 조회
    // [__readOneArticle.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__readOneArticle.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.detail = action.payload;
    // },
    // [__readOneArticle.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // 삭제
    // [__deleteArticles.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__deleteArticles.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.articles = state.articles.filter(
    //     (article) => article.id !== action.payload
    //   );
    // },
    // [__deleteArticles.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export default commentSlice.reducer;
