import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from '../../shared/Cookie';
import { BASE_URL } from '../../shared/api';

// 내가 쓴 게시글 조회
export const __readMyArticles = createAsyncThunk(
  'readMyArticles',
  async (payload, thunkAPI) => {
    try {
      const data = await axios({
        method: 'get',
        url: `${BASE_URL}/api/auth/mypage/myarticle`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: getCookie('ACCESS_TOKEN'),
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 내가 좋아요 한 게시글 조회
export const __readMyLikerticles = createAsyncThunk(
  'readMyLikerticles',
  async (payload, thunkAPI) => {
    try {
      const data = await axios({
        method: 'get',
        url: `${BASE_URL}/api/auth/mypage/myheart`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: getCookie('ACCESS_TOKEN'),
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  myArticles: [],
  myLikeArticles: [],
  isLoading: false,
  error: null,
};

export const myArticleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: {
    // 내가 쓴 게시글 조회
    [__readMyArticles.pending]: (state) => {
      state.isLoading = true;
    },
    [__readMyArticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.myArticles = action.payload;
    },
    [__readMyArticles.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 내가 좋아요 한 게시글 조회
    [__readMyLikerticles.pending]: (state) => {
      state.isLoading = true;
    },
    [__readMyLikerticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.myLikeArticles = action.payload;
    },
    [__readMyLikerticles.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default myArticleSlice.reducer;
