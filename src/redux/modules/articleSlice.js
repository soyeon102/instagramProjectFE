import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { isCompositeComponent } from 'react-dom/test-utils';
import { getCookie, setCookie } from '../../shared/Cookie';

const BASE_URL = 'http://13.209.97.60';

const initialState = {
  articles: [],
  detail: {},
  page: 0,
  hasMore: false,
  isLoading: false,
  error: null,
};

// 생성
export const __createArticles = createAsyncThunk(
  'createArticles',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-type': 'multipart/form-data',
          responseType: 'blob',
          Authorization: getCookie('ACCESS_TOKEN'),
        },
      };
      const data = await axios.post(
        `${BASE_URL}/api/auth/article`,
        payload,
        config
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 전체 조회
export const __readArticles = createAsyncThunk(
  'readArticles',
  async (payload, thunkAPI) => {
    try {
      const data = await axios({
        method: 'get',
        url: `${BASE_URL}/api/auth/article?size=10&page=${payload}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: getCookie('ACCESS_TOKEN'),
        },
      });
      return thunkAPI.fulfillWithValue(data.data.content);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 상세 조회
export const __readOneArticle = createAsyncThunk(
  'readOneArticle',
  async (payload, thunkAPI) => {
    try {
      const data = await axios({
        method: 'get',
        url: `${BASE_URL}/api/auth/article/${payload}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: getCookie('ACCESS_TOKEN'),
        },
      });
      console.log('상세 조회 data.data', data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// 삭제
export const __deleteArticles = createAsyncThunk(
  'deleteArticles',
  async (payload, thunkAPI) => {
    try {
      const data = await axios({
        method: 'delete',
        url: `${BASE_URL}/api/auth/article/${payload}`,
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

// 좋아요
export const __likeArticle = createAsyncThunk(
  'likeArticle',
  async (payload, thunkAPI) => {
    try {
      const data = await axios({
        method: 'post',
        url: `${BASE_URL}/api/auth/heart/${payload}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: getCookie('ACCESS_TOKEN'),
        },
      });
      console.log('좋아요 data.data', data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: {
    // 생성
    [__createArticles.pending]: (state) => {
      state.isLoading = true;
    },
    [__createArticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articles = [action.payload, ...state.articles];
    },
    [__createArticles.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 전체 조회
    [__readArticles.pending]: (state) => {
      state.isLoading = true;
    },
    [__readArticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articles = [...state.articles, ...action.payload];
      state.hasMore = action.payload.length > 0;
    },
    [__readArticles.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 상세 조회
    [__readOneArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [__readOneArticle.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    },
    [__readOneArticle.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 삭제
    [__deleteArticles.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteArticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articles = state.articles.filter(
        (article) => article.id !== action.payload
      );
    },
    [__deleteArticles.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 좋아요
    [__likeArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [__likeArticle.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = {
        ...state.detail,
        heartCnt: action.payload.heartCnt,
        like: action.payload.like,
      };
      // state.articles =
      // console.log('좋아요 action.payload', action.payload);
    },
    [__likeArticle.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default articleSlice.reducer;
