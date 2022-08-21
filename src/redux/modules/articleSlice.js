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
export const __createArticles = createAsyncThunk(
  'createArticles',
  async (payload, thunkAPI) => {
    console.log('payload!!!!', payload);
    try {
      const formConfig = {
        headers: {
          'Content-type': 'multipart/form-data',
          responseType: 'blob',
          Authorization: getCookie('ACCESS_TOKEN'),
        },
      };
      const data = await axios.post(
        `${BASE_URL}/api/auth/article`,
        payload,
        formConfig
      );
      console.log('업로드!!!!!', data.data);
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
      const data = await axios.get(`${BASE_URL}/api/auth/article`, config);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// 상세 조회
export const __readOneArticle = createAsyncThunk(
  'readOneArticle',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/auth/article/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
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
      const data = await axios.delete(
        `${BASE_URL}/api/auth/article/${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  articles: [],
  detail: {},
  isLoading: false,
  error: null,
};

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
      state.articles = action.payload;
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
      state.articles = action.payload;
    },
    [__readArticles.rejected]: (state, action) => {
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
  },
});

export default articleSlice.reducer;
